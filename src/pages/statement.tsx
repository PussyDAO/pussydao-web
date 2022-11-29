import type { NextPage } from 'next';
import Head from 'next/head';
import { ArtistStatementView } from '../views';

const ArtistStatement: NextPage = props => {
  return (
    <>
      <Head>
        <title>Pussy DAO | Artist Statement</title>
        <meta name='description' content='Pussy DAO' />
      </Head>
      <ArtistStatementView />
    </>
  );
};

export default ArtistStatement;
