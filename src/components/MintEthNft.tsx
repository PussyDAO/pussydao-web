import { FC, useEffect, useState } from 'react';
import {
  useAccount,
  useContract,
  useNetwork,
  useWaitForTransaction,
} from 'wagmi';
import { useQuery, useMutation } from '@tanstack/react-query';
import { abi } from 'utils/ethNftAbi';
import { ethers } from 'ethers';
import { ParagraphTag } from './common';

const MintEthNft: FC<{ signer: any }> = ({ signer }) => {
  const [amountToMint, setAmountToMint] = useState(1);
  const [txnHash, setTxnHash] = useState(null);
  const [error, setError] = useState(null);
  const { chain } = useNetwork();
  const contract = useContract({
    addressOrName: process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS,
    contractInterface: abi,
    signerOrProvider: signer.data,
  });

  const {
    data: txnRes,
    isLoading,
    isError,
  } = useWaitForTransaction({
    hash: txnHash,
    chainId: chain.id,
  });

  // fetch contract state from blockchain
  const { data, refetch } = useQuery({
    queryKey: ['contract state', signer.isLoading, contract.address, txnRes],
    queryFn: async () => {
      const mintPhase: 0 | 1 | 2 = await contract.mintPhase();
      const nftPrice = await contract.nftPrice();
      const currentSupply = await contract.totalCurrentSupply();

      return {
        mintPhase,
        nftPrice,
        currentSupply,
      };
    },
  });

  // mint nfts
  const { mutate: mint, isLoading: mintIsLoading } = useMutation({
    mutationFn: async () => {
      if (data.mintPhase !== 0) {
        const txn = await contract.mintPresale(amountToMint, {
          value: data.nftPrice.mul(amountToMint),
        });
        setTxnHash(txn.hash);
        await txn.wait();
        await refetch();
      }
    },
  });

  // amount to mint state effect
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
  }, [amountToMint]);

  const adjustAmount = (dir: 'inc' | 'dec') => {
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
        <p className='text-2xl'>
          Current Pre-mint Supply:
          <br />
          <b className='text-3xl'>{data?.currentSupply.toString()}/600</b>
        </p>
        {error && (
          <p className='text-red-500 bg-white p-2 rounded-lg mb-5 text-xl'>
            {error}
          </p>
        )}
      </div>
      <div className='flex flex-row justify-center mt-4'>
        <button
          onClick={() => adjustAmount('dec')}
          className='text-5xl bg-pink-200 text-black rounded-lg h-15 w-15 px-5 mx-5'
        >
          -
        </button>
        <input
          className='p-5 pb-3 pr-6 text-5xl font-display text-black text-center rounded-lg'
          value={amountToMint}
          onChange={e => setAmountToMint(parseInt(e.target.value))}
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
          Total:{' '}
          {!amountToMint
            ? 0
            : ethers.utils.formatUnits(data.nftPrice.mul(amountToMint))}{' '}
          ETH
        </p>
      )}
      <div className='h-20 flex items-center justify-center'>
        {txnHash && mintIsLoading ? (
          <ParagraphTag className='text-2xl'>Minting...</ParagraphTag>
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
              ? `Mint ${amountToMint} NFT${amountToMint > 1 ? 's' : ''}`
              : `Select Amount`}
          </button>
        )}
      </div>
    </div>
  );
};

export default MintEthNft;
