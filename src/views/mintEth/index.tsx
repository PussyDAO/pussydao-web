import classNames from 'classnames';
import {
  ConnectWalletButton,
  HeaderTag,
  ParagraphTag,
} from 'components/common';
import { MainView } from 'components/MainView';
import MintEthNft from 'components/MintEthNft';
import { FC } from 'react';
import { useAccount, useSigner } from 'wagmi';

export const MintEthView: FC = ({ children }) => {
  const { isDisconnected } = useAccount();
  const signer = useSigner();

  return (
    <MainView>
      <HeaderTag className='text-center' type={1}>
        Pre-mint your nfts
      </HeaderTag>
      {isDisconnected && (
        <ParagraphTag className='text-2xl text-center'>
          Please connect your wallet
          <br />
          to mint your NFTs.
        </ParagraphTag>
      )}
      <div>
        {isDisconnected ? (
          <div className='mt-6 flex justify-center items-center text-xl'>
            <ConnectWalletButton />
          </div>
        ) : signer.data ? (
          <MintEthNft signer={signer} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </MainView>
  );
};
