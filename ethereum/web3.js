import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running -> then hijack web3 provider in metamask and use own own
  web3 = new Web3(window.web3.currentProvider);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/a78b61935e184a04a723e1b22a617f3e'
  );
  web3 = new Web3(provider);
}

export default web3;
