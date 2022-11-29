import { FC } from 'react';
import { HeaderTag, ParagraphTag } from 'components/common';
import { MainView } from 'components/MainView';
import Link from 'next/link';

export const HomeView: FC = () => {
  return (
    <MainView>
      <ParagraphTag className='pb-4 text-2xl'>Drop &#35;001</ParagraphTag>
      <HeaderTag type={1}>The Panty Drop</HeaderTag>
      <ParagraphTag className='text-xl'>
        Get our pre-mint token and guarantee you&apos;ll be 1 of 1,000 holders
        of the Panty Drop &#8211; our genesis collection that allows you to
        redeem your NFT for IRL panties that cum in their very own
        collector&apos;s box.
      </ParagraphTag>
      <Link href='/mint'>
        <a>
          <button className='bg-pink-200 text-black w-full rounded-lg p-3 mt-5 -mb-3 text-3xl'>
            <span>Pre-mint an NFT</span>
          </button>
        </a>
      </Link>
    </MainView>
  );
};
