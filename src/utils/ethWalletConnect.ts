import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const chainsList =
  process.env.NODE_ENV === 'development' ? [chain.goerli] : [chain.mainnet];

const { chains, provider } = configureChains(chainsList, [
  alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID }),
  publicProvider(),
]);

const { connectors } = getDefaultWallets({
  appName: 'Pussy DAO',
  chains,
});

export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export { chains };
