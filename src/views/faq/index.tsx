import { FC } from 'react';
import classNames from 'classnames';
import { HeaderTag, ParagraphTag } from 'components/common';
import { useAccount, useSigner } from 'wagmi';

export const FAQView: FC = ({ children }) => {
  return (
    <div className='w-11/12 max-w-4xl mx-auto my-28'>
      <HeaderTag type={1} className='text-5xl mb-10'>
        FAQ
      </HeaderTag>

      <div>
        <div>
          <HeaderTag type={2} className='text-3xl mt-14'>
            Wtf is PussyDAO?
          </HeaderTag>
          <ParagraphTag className='mb-4 text-xl'>
            PussyDAO is an experiment by Highly Liquid Inc. – a next-generation
            apparel and product brand backed by emerging technologies. In the
            coming months, we’ll be releasing a series of limited-edition drops
            across different mediums: fashion, software, games, food, and CPG.
            You can think of us like a girly Mr. Beast: a project that’s set to
            wreak havoc while bringing a vibe that’s both punk rock and
            hyperfeminine.
          </ParagraphTag>
          <ParagraphTag className='mb-4 text-xl'>
            For our genesis drop, aka, The Panty Drop, we’re doing a collection
            of 1,000 IRL panties backed by NFTs: 100 on Solana and 900 on
            Ethereum. Every pair of panties says “highly liquid” on the crotch.
            😘
          </ParagraphTag>
          <ParagraphTag className='mb-4 text-xl'>
            After minting, holders will be able to redeem their NFTs for IRL
            panties made by one of the top ateliers in the USA. Every pair comes
            in a collector’s box designed by the same packaging company that
            creates custom work for MSCHF. Plus, we have a few surprises for you
            to look forward to after the mint...
          </ParagraphTag>
        </div>
        <div>
          <HeaderTag type={2} className='text-3xl mt-14'>
            How does the minting process work?
          </HeaderTag>
          <ParagraphTag className='mb-4 text-xl'>
            The Panty Drop mint will go down in 3 phases: the pre-mint, the
            mint, and the redemption process.
          </ParagraphTag>
          <ParagraphTag className='mb-4 text-xl'>
            By pre-minting your NFT, you guarantee that you’ll be 1 of our 1,000
            holders and also get your NFT at a discount from the official mint
            day price. Every pre-mint NFT looks the same, and no rarity traits
            will be revealed until mint day. On mint day, your pre-mint NFT
            metadata will change to your official PussyDAO NFT. If you miss out
            on the pre-mint, you can still make it onto the Pink List. This will
            allow you to mint on our official mint day, and you’ll get an NFT
            with rarity traits that will be revealed as soon as you mint.
          </ParagraphTag>
          <ParagraphTag className='mb-4 text-xl'>
            Once our official mint day is over, we’ll start our redemption
            period – the six-month period where holders have the chance to
            redeem their NFTs for IRL panties. After you redeem your NFT, your
            metadata will change once again. But don’t worry – it’ll still look
            dope af.
          </ParagraphTag>
        </div>
        <div>
          <HeaderTag type={2} className='text-3xl mt-14'>
            Why are you guys doing a pre-mint?
          </HeaderTag>
          <ParagraphTag className='mb-4 text-xl'>
            Let’s face it: mints suck rn. First of all, it’s almost impossible
            to pick a time slot for a mint that works well for every member of a
            global audience. On top of that, after you’ve gone out of your way
            to clear your schedule so you can sit down and actually mint your
            NFT, you’re up against an army of bot spam that pretty much ruins
            the entire experience.
          </ParagraphTag>
          <ParagraphTag className='mb-4 text-xl'>
            Our solution? A pre-mint. Now, our die-hard fans have the
            opportunity to mint their PussyDAO NFT before the actual mint day,
            which means you can make sure you get your hands on your NFT instead
            of losing it to someone’s bot that can click faster than you. Plus,
            when you pre-mint, you’ll get a discount on the actual mint price.
          </ParagraphTag>
          <ParagraphTag className='mb-4 text-xl'>
            This way, everybody wins. 🤝
          </ParagraphTag>
        </div>
        <div>
          <HeaderTag type={2} className='text-3xl mt-14'>
            What’s included in the mint price?
          </HeaderTag>
          <ParagraphTag className='mb-4 text-xl'>
            Whether you’re pre-minting or taking part in minting on our official
            mint date, you’ll become 1 of 1,000 holders who can redeem their
            NFTs for IRL panties. That means, for the price of one NFT, you’re
            getting PussyDAO art, IRL panties made by hand in Los Angeles, a
            collector’s box, and international shipping.
          </ParagraphTag>
        </div>
        <div>
          <HeaderTag type={2} className='text-3xl mt-14'>
            What is the Pink List?
          </HeaderTag>
          <ParagraphTag className='mb-4 text-xl'>
            In lieu of a white list, we’re doing a Pink List. If you’re lucky
            enough to get on it, you’ll be given priority on mint day and
            hopefully get your panties before they sell out.
          </ParagraphTag>
        </div>
        <div>
          <HeaderTag type={2} className='text-3xl mt-14'>
            How do rarity traits cum into play?
          </HeaderTag>
          <ParagraphTag className='mb-4 text-xl'>
            Our rarity traits work a little bit differently than your typical
            NFT collection.
          </ParagraphTag>
          <ParagraphTag className='mb-4 text-xl'>
            For our Solana drop (100 NFTS in total), we have 3 variations of
            panty colors: 50 purple and aqua, 45 purple and white, and 5 purple
            with rhinestones. Each pair will cum in its own monochrome purple
            collector’s box.
          </ParagraphTag>
          <ParagraphTag className='mb-4 text-xl'>
            Our Ethereum drop (900 NFTs in total) includes 6 color variations:
            500 hot pink and white, 300 light pink and black, 95 black and gold,
            3 purple and pink, 2 white and gold, and 1 super rare pink
            monochrome pair. Each pair will cum in its own monochrome pink
            collector’s box.
          </ParagraphTag>
          <ParagraphTag className='mb-4 text-xl'>
            If you choose to be part of our pre-mint, you will receive an NFT
            that looks just like every other pre-mint NFT – in other words, you
            won’t know how rare your official PussyDAO NFT is until mint day
            when your metadata is updated and your rarity traits are revealed.
            Similarly, if you’re minting with us for the first time on mint day,
            you’ll find out how lucky you got once you mint – and how rare your
            panties are compared to everyone else’s.
          </ParagraphTag>
        </div>
        <div>
          <HeaderTag type={2} className='text-3xl mt-14'>
            How do I get my panties?
          </HeaderTag>
          <ParagraphTag className='mb-4 text-xl'>
            After minting your NFT, there will be a brief period of time before
            our redemption process goes live. Once the redemption period is
            open, you can cum to our website, click “redeem,” and be directed to
            our redemption page. The redemption period is a six-month period
            that allows holders to redeem their NFTs for IRL panties. Once the
            redemption period closes, holders will no longer be eligible for the
            redemption process. Please keep in mind that all panties are final
            sale, and once you redeem your NFT for your panties, no refunds or
            returns can be made.
          </ParagraphTag>
          <ParagraphTag className='mb-4 text-xl'>
            Here, you’ll be prompted to enter your name, shipping address, phone
            number, and other information required to ensure your panties are
            shipped to wherever you are in the world.
          </ParagraphTag>
          <ParagraphTag className='mb-4 text-xl'>
            Once you redeem your NFT for your panties, the metadata and art of
            your NFT will change, but don’t worry – you’ll get something new
            that still looks sick af and entitles you to some cool shit in the
            future. 👀
          </ParagraphTag>
        </div>
        <div>
          <HeaderTag type={2} className='text-3xl mt-14'>
            Where does PussyDAO ship?
          </HeaderTag>
          <ParagraphTag className='mb-4 text-xl'>
            Worldwide, baby! 🌎
          </ParagraphTag>
        </div>
        <div>
          <HeaderTag type={2} className='text-3xl mt-14'>
            What is the redemption period?
          </HeaderTag>
          <ParagraphTag className='mb-4 text-xl'>
            The redemption period is the six-month period that will start
            shortly after the official mint date. This is the time period where
            holders have the opportunity to redeem their NFTs for their IRL
            panties and have their panties shipped to them anywhere in the
            world.
          </ParagraphTag>
          <ParagraphTag className='mb-4 text-xl'>
            Once the redemption period closes, holders will no longer be able to
            redeem their NFTs for IRL panties.
          </ParagraphTag>
        </div>
        <div>
          <HeaderTag type={2} className='text-3xl mt-14'>
            Where are PussyDAO panties made?
          </HeaderTag>
          <ParagraphTag className='mb-4 text-xl'>
            Our panties were designed by our founder and made in Los Angeles by
            the same atelier that works with leading luxury brands like Rodarte
            and Marchesa. Ethical production was top of mind for us when we
            chose our manufacturing partner. We wanted our panties to represent
            what we stand for as a business and brand, and we’re grateful to be
            working with a factory that’s truly aligned with our mission and
            purpose. 🤝
          </ParagraphTag>
          <ParagraphTag className='mb-4 text-xl'>
            Additionally, our atelier has deep ties to luxury manufacturing,
            meaning our panties are produced by experts in the field. Some of
            the materials used to produce our panties include elastic imported
            from Japan and premium satin sourced by specialists in Los Angeles.
          </ParagraphTag>
          <ParagraphTag className='mb-4 text-xl'>
            The manufacturer we partnered with to produce the packaging that our
            panties cum in is also based in Los Angeles, and they have a long
            history of working with some of our favorite brands, including
            <a href='https://www.marchesa.com/'>MSCHF</a>. They custom-created
            our collector’s box so you can keep your panties preserved forever
            like the piece of art they are.
          </ParagraphTag>
        </div>
        <div>
          <HeaderTag type={2} className='text-3xl mt-14'>
            How does sizing work?
          </HeaderTag>
          <ParagraphTag className='mb-4 text-xl'>
            We think you’re perfect just the way you are, which is why our
            panties are designed to be one-size-fits-most.
          </ParagraphTag>
          <ParagraphTag className='mb-4 text-xl'>
            The waistband is adjustable, so they can be worn low-rise or
            high-rise, and they fit most body types across a range of
            traditional small, medium, and large sizing standards.
          </ParagraphTag>
          <ParagraphTag className='mb-4 text-xl'>
            The cut of our panties is extremely skimpy – that’s because PussyDAO
            is giving Y2K vibes and bimbocore. If you’ve got it, flaunt it (and
            we know you do). 🤷‍♀️
          </ParagraphTag>
        </div>
        <div>
          <HeaderTag type={2} className='text-3xl mt-14'>
            How do I care for my panties?
          </HeaderTag>
          <ParagraphTag className='mb-4 text-xl'>
            We know you like it rough, but your panties must be hand-washed,
            hang-dried, and handled with extreme care. They are a handmade
            collector’s item created with love in Los Angeles.
          </ParagraphTag>
        </div>
        <div>
          <HeaderTag type={2} className='text-3xl mt-14'>
            Why are you launching on two separate chains?
          </HeaderTag>
          <ParagraphTag className='mb-4 text-xl'>
            We know it’s a little unorthodox to launch on two chains at once,
            but we’ve never been the type to follow rules. 🤷‍♀️
          </ParagraphTag>
          <ParagraphTag className='mb-4 text-xl'>
            his project was born out of conversations our founder had with
            native Solana builders, and we wanted to launch a small collection
            that honored our ties with the Solana DeFi community. On top of
            that, we’ve had endless requests from our Ethereum friends to mint
            on ETH, and we couldn’t be more grateful for this ecosystem’s
            support.
          </ParagraphTag>
          <ParagraphTag className='mb-4 text-xl'>
            As a result, we’re giving the best of both worlds with a drop for
            each chain: 100 on Solana and 900 on Ethereum – 1,000
            limited-edition panties in total.
          </ParagraphTag>
          <ParagraphTag className='mb-4 text-xl'>
            Our Solana panties cum in 3 variations: 50 purple and aqua, 45
            purple and white, and 5 purple with rhinestones. Each pair will cum
            in its own monochrome purple collector’s box.
          </ParagraphTag>
          <ParagraphTag className='mb-4 text-xl'>
            Our Ethereum panties cum in 6 variations: 500 hot pink and white,
            300 light pink and black, 95 black and gold, 3 purple and pink, 2
            white and gold, and 1 pink monochrome. Each pair will cum in its own
            monochrome pink collector’s box.
          </ParagraphTag>
          <ParagraphTag className='mb-4 text-xl'>
            PussyDAO doesn’t belong on any one chain – we’re a zeitgeist
            creating the kind of art that makes web3 matter.
          </ParagraphTag>
        </div>
      </div>
    </div>
  );
};
