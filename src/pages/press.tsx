import type { NextPage } from 'next';
import Head from 'next/head';
import { PressView } from '../views';

const Press: NextPage = props => {
  return (
    <>
      <Head>
        <title>Pussy DAO | Artist Statement</title>
        <meta name='description' content='Pussy DAO' />
      </Head>
      <PressView />
    </>
  );
};

export default Press;
