const { ethers } = require('ethers');

async function connect() {
  if (typeof window.ethereum !== 'undefined') {
    ethereum.request({ method: 'eth_requestAccounts' });
  }
}

async function execute() {
  //address
  // contract ABI
  // function
  // node connection

  const contractAddress = '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266';
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

  await contract.store(42);
}

module.exports = {
  connect,
  execute,
};
