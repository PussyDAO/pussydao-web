import { FC, useEffect, useState } from 'react';
import {
  useAccount,
  useBalance,
  useContract,
  useNetwork,
  useWaitForTransaction,
} from 'wagmi';
import { useQuery, useMutation } from '@tanstack/react-query';
import { abi } from 'utils/ethNftAbi';
import { ethers } from 'ethers';
import { ParagraphTag } from './common';
import truncateEthAddress from 'truncate-eth-address';

const reservedAddresses = [
  '0xb1b09721e8640b7ef1c11eaf09dc2d519cdc4a2e',
  '0x266e873a0d1e76c63af2f50bc5ca6d25867d4300',
  '0xf3612F6342370620228140147e463Fe5D389e494',
  '0xB52235DC0751ce6E171C51fbF459fd6637c6ccc8',
];

const MintEthNft: FC<{ signer: any }> = ({ signer }) => {
  const [amountToMint, setAmountToMint] = useState(1);
  const [txnHash, setTxnHash] = useState(null);
  const [error, setError] = useState(null);
  const [mintingFree, setMintingFree] = useState(false);
  const { address } = useAccount();
  const { chain } = useNetwork();
  const { data: balance } = useBalance({ addressOrName: address });
  const contract = useContract({
    addressOrName: process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS,
    contractInterface: abi,
    signerOrProvider: signer.data,
  });
  const txn = useWaitForTransaction({
    hash: txnHash,
    chainId: chain.id,
  });

  const { data: txnRes, isLoading, isError, isSuccess, error: txnError } = txn;
  console.log(txn);

  // fetch contract state from blockchain
  const { data, refetch } = useQuery({
    queryKey: ['contract state', signer.isLoading, contract.address, txnRes, 4],
    queryFn: async () => {
      const mintPhase: 0 | 1 | 2 = await contract.mintPhase();
      const nftPrice = await contract.nftPrice();
      const currentSupply = await contract.totalCurrentSupply();
      const userNftBalance = await contract.balanceOf(address);

      return {
        mintPhase,
        nftPrice,
        currentSupply,
        userNftBalance,
      };
    },
    cacheTime: 0,
  });

  // mint nfts
  const { mutate: mint, isLoading: mintIsLoading } = useMutation({
    mutationFn: async () => {
      if (data.mintPhase !== 0) {
        const txn = await contract.mintPresale(amountToMint, {
          value: mintingFree ? undefined : data.nftPrice.mul(amountToMint),
        });
        setTxnHash(txn.hash);
        localStorage.setItem('txnHash', txn.hash);
        await txn.wait();
        await refetch();
      }
    },
    cacheTime: 0,
  });

  useEffect(() => {
    if (amountToMint != NaN) {
      if (amountToMint < 1) {
        setError('NFT amount must be at least 1');
      } else if (amountToMint > 900) {
        setError('Max total supply is 900, please mint less');
      } else {
        setError(null);
      }
    }
    if (
      address &&
      reservedAddresses.includes(address) &&
      data?.userNftBalance.eq(0)
    ) {
      setMintingFree(true);
    }
  }, [amountToMint, address, data]);

  const adjustAmount = (dir: 'inc' | 'dec') => {
    // cannot change amount, must mint their 1 free first
    if (mintingFree) return;
    if (!amountToMint) {
      setAmountToMint(1);
    } else if (dir === 'inc') {
      if (amountToMint < 900) setAmountToMint(amountToMint + 1);
    } else {
      if (amountToMint > 1) setAmountToMint(amountToMint - 1);
    }
  };

  return (
    <div className='text-center'>
      <ParagraphTag className='-mt-2'>
        Only 600 available for pre-mint! Max total supply is 900.
      </ParagraphTag>
      <div className='mt-3'>
        {/* <p className='text-2xl'>
          Current {data?.mintPhase === 1 && 'Pre-mint'} Supply:
          <br />
          <b className='text-3xl'>{data?.currentSupply.toString()}/600</b>
        </p> */}
        <p className='text-2xl'>Total Supply: 600</p>
        {error && (
          <p className='text-red-500 bg-white p-2 rounded-lg mb-5 text-xl'>
            {error}
          </p>
        )}
      </div>
      <div className='relative flex flex-row justify-center mt-4'>
        <button
          onClick={() => adjustAmount('dec')}
          className='text-5xl bg-pink-200 text-black rounded-lg h-15 w-15 px-5 mx-5'
        >
          -
        </button>
        <input
          className='p-5 pb-3 pr-6 text-5xl font-display text-black text-center rounded-lg'
          value={mintingFree ? 1 : amountToMint}
          onChange={e =>
            !mintingFree && setAmountToMint(parseInt(e.target.value))
          }
          type='number'
          min={1}
          max={900}
        />
        <button
          onClick={() => adjustAmount('inc')}
          className='text-5xl bg-pink-200 text-black rounded-lg h-15 w-15 px-5 mx-5'
        >
          +
        </button>
      </div>
      {data && (
        <p className='text-2xl mt-2'>
          {!mintingFree && 'Total: '}
          {mintingFree
            ? 'You have 1 free mint!'
            : !amountToMint
            ? 0
            : ethers.utils.formatUnits(data.nftPrice.mul(amountToMint))}{' '}
          {!mintingFree && 'ETH'}
        </p>
      )}
      <div className='h-20 flex items-center justify-center'>
        {txnHash && txn ? (
          <div className='flex flex-col'>
            <ParagraphTag className='text-2xl'>
              {txn.status === 'loading'
                ? 'Minting...'
                : txn.status === 'success'
                ? 'Minted!'
                : 'Failed'}
            </ParagraphTag>
            <ParagraphTag className='text-2xl'>
              Txn Hash:{' '}
              <a href={'https://etherscan.io/tx/' + txnHash}>
                {truncateEthAddress(txnHash)}
              </a>
            </ParagraphTag>
          </div>
        ) : balance &&
          balance.value &&
          data &&
          balance.value.lt(data.nftPrice) &&
          !mintingFree ? (
          <ParagraphTag className='text-2xl'>Insufficient Balance</ParagraphTag>
        ) : (
          <button
            disabled={
              error ||
              !amountToMint ||
              data?.currentSupply.toNumber() + amountToMint > 600
            }
            onClick={() => mint()}
            className='bg-pink-200 text-black w-44 rounded-lg p-2 mt-5 -mb-3 text-3xl'
          >
            {!!amountToMint
              ? `Mint ${mintingFree ? 'Free ' : amountToMint} NFT${
                  amountToMint > 1 ? 's' : ''
                }`
              : `Select Amount`}
          </button>
        )}
      </div>
    </div>
  );
};

export default MintEthNft;
