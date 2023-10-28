const { ethers } = require("ethers");

const abi = [
 {
  "inputs": [],
  "stateMutability": "nonpayable",
  "type": "constructor"
 },
 {
  "anonymous": false,
  "inputs": [
   {
    "indexed": true,
    "internalType": "uint256",
    "name": "bookId",
    "type": "uint256"
   },
   {
    "indexed": false,
    "internalType": "string",
    "name": "title",
    "type": "string"
   },
   {
    "indexed": false,
    "internalType": "string",
    "name": "author",
    "type": "string"
   },
   {
    "indexed": true,
    "internalType": "address",
    "name": "owner",
    "type": "address"
   }
  ],
  "name": "BookAdded",
  "type": "event"
 },
 {
  "anonymous": false,
  "inputs": [
   {
    "indexed": true,
    "internalType": "uint256",
    "name": "bookId",
    "type": "uint256"
   },
   {
    "indexed": true,
    "internalType": "address",
    "name": "previousOwner",
    "type": "address"
   },
   {
    "indexed": true,
    "internalType": "address",
    "name": "newOwner",
    "type": "address"
   }
  ],
  "name": "OwnershipTransferred",
  "type": "event"
 },
 {
  "inputs": [
   {
    "internalType": "uint256",
    "name": "registration",
    "type": "uint256"
   },
   {
    "internalType": "string",
    "name": "_title",
    "type": "string"
   },
   {
    "internalType": "string",
    "name": "_author",
    "type": "string"
   }
  ],
  "name": "addBook",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
 },
 {
  "inputs": [],
  "name": "bookCount",
  "outputs": [
   {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
   }
  ],
  "name": "books",
  "outputs": [
   {
    "internalType": "string",
    "name": "title",
    "type": "string"
   },
   {
    "internalType": "string",
    "name": "author",
    "type": "string"
   },
   {
    "internalType": "address",
    "name": "currentOwner",
    "type": "address"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "uint256",
    "name": "registrationId",
    "type": "uint256"
   }
  ],
  "name": "getBookDetails",
  "outputs": [
   {
    "internalType": "string",
    "name": "",
    "type": "string"
   },
   {
    "internalType": "string",
    "name": "",
    "type": "string"
   },
   {
    "internalType": "address",
    "name": "",
    "type": "address"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 },
 {
  "inputs": [],
  "name": "owner",
  "outputs": [
   {
    "internalType": "address",
    "name": "",
    "type": "address"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "uint256",
    "name": "registrationId",
    "type": "uint256"
   },
   {
    "internalType": "address",
    "name": "_newOwner",
    "type": "address"
   }
  ],
  "name": "transferOwnership",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
 }
]

if (!window.ethereum) {
 alert('Meta Mask Not Found')
 window.open("https://metamask.io/download/")
}

export const provider = new ethers.providers.Web3Provider(window.ethereum);
export const signer = provider.getSigner();
export const address = "0xd8b934580fcE35a11B58C6D73aDeE468a2833fa8"

export const contract = new ethers.Contract(address, abi, signer)
