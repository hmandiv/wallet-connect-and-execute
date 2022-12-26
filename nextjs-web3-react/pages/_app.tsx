import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { MoralisProvider } from 'react-moralis';

const getLibrary = (provider) => {
  return new Web3Provider(provider);
};
export default function App({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider initializeOnMount={false}>
      <Component {...pageProps} />
    </MoralisProvider>
    // <Web3ReactProvider getLibrary={getLibrary}>
    //   <Component {...pageProps} />
    // </Web3ReactProvider>
  );
}
