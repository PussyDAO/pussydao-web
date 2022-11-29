import { FC } from 'react';
import classNames from 'classnames';
import { HeaderTag, ParagraphTag } from 'components/common';
import { useAccount, useSigner } from 'wagmi';

export const AboutView: FC = ({ children }) => {
  return (
    <div className='w-11/12 max-w-4xl mx-auto my-28'>
      <HeaderTag type={1} className='text-5xl mb-10'>
        About
      </HeaderTag>

      <div>
        <ParagraphTag className='mb-4 text-2xl'>
          Alright, alright...lingerie, simps, empowerment, NFTs? Wtf is going
          on??
        </ParagraphTag>
        <ParagraphTag className='mb-4 text-2xl'>
          We’ll have to start from the beginning – let’s rewind to a few months
          ago, when a certain DeFi rebel princess found herself hanging out with
          a couple of crypto bros way past working hours. They were trying to
          map out tokenomics and bootstrap some sweet, sweet liquidity.
        </ParagraphTag>
        <ParagraphTag className='mb-4 text-2xl'>
          “Liquidity’s all that matters!” they screamed. “Liquidity, liquidity,
          liquidity!”
        </ParagraphTag>
        <ParagraphTag className='mb-4 text-2xl'>
          Amidst all the yelling, a simple idea flashed in her brain: a pair of
          panties that said “highly liquid” on the crotch.
        </ParagraphTag>
        <ParagraphTag className='mb-4 text-2xl'>
          We know, we know...very mature. But liquidity matters, right? Isn’t
          that what everyone means when they talk about a seamless swapping
          experience?
        </ParagraphTag>
        <ParagraphTag className='mb-4 text-2xl'>
          Well, our DeFi rebel princess decided to mock up a pair of panties,
          and she quickly found out everyone else wanted a pair, too. Both guys
          (well, mostly guys...) and girls were ready to buy. Some of them even
          offered to back her degenerate little art project – to see this maiden
          voyage turn into a full-on dominatrix set to go on its own world tour.
        </ParagraphTag>
        <ParagraphTag className='mb-4 text-2xl'>
          Now, for our genesis drop, we’re creating 1,000 NFTs that are
          redeemable for IRL panties – not to mention creating an entirely new
          vibe that the eco desperately needs: something that’s both punk rock
          and hyperfeminine.
        </ParagraphTag>
        <ParagraphTag className='mb-4 text-2xl'>
          But this drop is just the first of many. Watch this space, because
          there’s more to cum soon. ❤️‍🔥
        </ParagraphTag>
      </div>
    </div>
  );
};
