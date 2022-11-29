import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { Layout } from 'components/common';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { FC } from 'react';
import { wagmiClient, chains } from 'utils/ethWalletConnect';
import { WagmiConfig } from 'wagmi';
import { ContextProvider } from '../contexts/ContextProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@rainbow-me/rainbowkit/styles.css';
import 'styles/globals.css';

require('@solana/wallet-adapter-react-ui/styles.css');
require('../styles/globals.css');

const queryClient = new QueryClient();

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Pussy DAO</title>
      </Head>

      <ContextProvider>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains}>
            <QueryClientProvider client={queryClient}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </QueryClientProvider>
          </RainbowKitProvider>
        </WagmiConfig>
      </ContextProvider>
    </>
  );
};

export default App;
