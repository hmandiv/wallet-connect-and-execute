import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import { ethers } from 'ethers';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [isConnected, setIsConnected] = useState(false);
  const [signer, setSigner] = useState();

  async function connect() {
    if (typeof window.ethereum !== 'undefined') {
      try {
        await ethereum.request({ method: 'eth_requestAccounts' });
        setIsConnected(true);
        let connectedProvider = new ethers.providers.Web3Provider(
          window.ethereum
        );
        setSigner(connectedProvider.getSigner());
      } catch (error) {
        console.log(error);
      }
    } else {
      setIsConnected(false);
    }
  }

  async function execute() {
    //address
    // contract ABI
    // function
    // node connection

    const contractAddress = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';
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
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner(); // gets the connected account
    const contract = new ethers.Contract(contractAddress, abi, signer);

    try {
      await contract.store(42);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h2>Hello Frogs!</h2>
      </div>
      {isConnected ? (
        <>
          <h1>Connected</h1>
          <h1 className="execute" onClick={() => execute()}>
            Execute
          </h1>
        </>
      ) : (
        <h1 className="connect" onClick={() => connect()}>
          Connect
        </h1>
      )}
    </main>
  );
}
