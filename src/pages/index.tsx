import type { NextPage } from 'next';
import Head from 'next/head';
import { HomeView } from '../views';

const Home: NextPage = props => {
  return (
    <>
      <Head>
        <title>Pussy DAO</title>
        <meta name='description' content='Pussy DAO' />
      </Head>
      <HomeView />
    </>
  );
};

export default Home;
