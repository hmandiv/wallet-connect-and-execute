import { Inter } from '@next/font/google';
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { ethers } from 'ethers';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useMoralis, useWeb3Contract } from 'react-moralis/';

const inter = Inter({ subsets: ['latin'] });
const injected = new InjectedConnector();

export default function Home() {
  const abi = [
    {
      inputs: [
        {
          internalType: 'string',
          name: '_name',
          type: 'string',
        },
        {
          internalType: 'uint256',
          name: '_favoriteNumber',
          type: 'uint256',
        },
      ],
      name: 'addPerson',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      name: 'nameToFavoriteNumber',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'people',
      outputs: [
        {
          internalType: 'uint256',
          name: 'favoriteNumber',
          type: 'uint256',
        },
        {
          internalType: 'string',
          name: 'name',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'retrieve',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_favoriteNumber',
          type: 'uint256',
        },
      ],
      name: 'store',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ];
  const contractAddress = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';
  // const { activate, active, library: provider } = useWeb3React();
  const { enableWeb3, isWeb3Enabled, provider } = useMoralis();
  const { runContractFunction } = useWeb3Contract({
    abi: abi,
    contractAddress: contractAddress,
    functionName: 'store',
    params: {
      _favoriteNumber: 42,
    },
  });

  // async function connect() {
  //   try {
  //     await activate(injected);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // async function execute() {
  //   //address
  //   // contract ABI
  //   // function
  //   // node connection
  //   if (active) {
  //     const signer = provider.getSigner();
  //     const contract = new ethers.Contract(contractAddress, abi, signer);
  //     try {
  //       await contract.store(42);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   } else {
  //     console.log('Please install MetaMask');
  //   }
  // }

  return (
    <>
      <Head>
        <title>ETH Dapp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          Hi Frogs!!
          {isWeb3Enabled ? (
            <>
              <h1>Connected</h1>
              <h1 className="execute" onClick={() => runContractFunction()}>
                Execute
              </h1>
            </>
          ) : (
            <h1 className="connect" onClick={() => enableWeb3()}>
              Connect
            </h1>
          )}
        </div>
      </main>
    </>
  );
}
