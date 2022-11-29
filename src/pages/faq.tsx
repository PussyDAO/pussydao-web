import type { NextPage } from 'next';
import Head from 'next/head';
import { FAQView } from '../views';

const FAQ: NextPage = props => {
  return (
    <>
      <Head>
        <title>Pussy DAO | FAQ</title>
        <meta name='description' content='Pussy DAO' />
      </Head>
      <FAQView />
    </>
  );
};

export default FAQ;
