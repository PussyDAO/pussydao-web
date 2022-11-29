import type { NextPage } from 'next';
import Head from 'next/head';
import { AboutView } from '../views';

const About: NextPage = props => {
  return (
    <>
      <Head>
        <title>Pussy DAO | About</title>
        <meta name='description' content='Pussy DAO' />
      </Head>
      <AboutView />
    </>
  );
};

export default About;
