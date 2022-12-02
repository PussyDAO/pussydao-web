import { FC } from 'react';
import { HeaderTag, ParagraphTag } from 'components/common';

export const PressView: FC = () => {
  return (
    <div className='w-11/12 max-w-4xl mx-auto my-28'>
      <HeaderTag type={1} className='text-5xl mb-10'>
        Press
      </HeaderTag>

      <div>
        <div className='mb-20'>
          <HeaderTag type={3} className='text-3xl mt-5'>
            New York Times
          </HeaderTag>
          <ParagraphTag className='mb-4 text-2xl underline'>
            <a
              href='https://www.nytimes.com/2022/12/01/style/crypto-awards.html'
              target='_blank'
            >
              Crypto Crashes, but the Awards Go On
            </a>
          </ParagraphTag>
        </div>
        <div className='mb-20'>
          <HeaderTag type={3} className='text-3xl mt-5'>
            Decrypt
          </HeaderTag>
          <ParagraphTag className='mb-4 text-2xl underline'>
            <a
              href='https://decrypt.co/videos/live-events/ehF6s6Ix/why-izzy-howell-left-solana-derivatives-protocol-cypher-to-launch-an-nft-apparel-brand'
              target='_blank'
            >
              Why Izzy Howell Left Solana Derivatives Protocol Cypher to Launch
              an NFT Apparel Brand
            </a>
          </ParagraphTag>
          <ParagraphTag className='mb-4 text-2xl underline'>
            <a
              href='https://decrypt.co/111014/how-pussydao-is-using-solana-nfts-to-sell-physical-underwear'
              target='_blank'
            >
              How PussyDAO Is Using Solana NFTs to Sell Physical Underwear
            </a>
          </ParagraphTag>
        </div>
        <div className='mb-20'>
          <HeaderTag type={3} className='text-3xl mt-5'>
            WWD
          </HeaderTag>
          <ParagraphTag className='mb-4 text-2xl underline'>
            <a
              href='https://wwd.com/eye/parties/inside-the-first-crypties-awards-ceremony-decrypt-art-basel-miami-1235434734/'
              target='_blank'
            >
              Inside the First Crypties Award Ceremony
            </a>
          </ParagraphTag>
        </div>
        <div className='mb-20'>
          <HeaderTag type={3} className='text-3xl mt-5'>
            Tech in Asia
          </HeaderTag>
          <ParagraphTag className='mb-4 text-2xl underline'>
            <a
              href='https://www.techinasia.com/coming-pussydao-nft-wear?utm_source=li&utm_medium=social&utm_campaign=growth-kol-Scott'
              target='_blank'
            >
              Coming soon from PussyDAO: an NFT you can wear
            </a>
          </ParagraphTag>
        </div>
        <div className='mb-20'>
          <HeaderTag type={3} className='text-3xl mt-5'>
            NFT Evening
          </HeaderTag>
          <ParagraphTag className='mb-4 text-2xl underline'>
            <a
              href='https://nftevening.com/pussydao-nfts-can-be-redeemed-for-real-life-panties/'
              target='_blank'
            >
              PussyDAO NFTs Can Be Redeemed For Real-Life Panties
            </a>
          </ParagraphTag>
        </div>
      </div>
    </div>
  );
};
