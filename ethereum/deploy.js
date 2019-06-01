const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

/*
 * Ok to make access key a78b... public since infura does NOT store any sensitive data
 * Infura is only a portal to access the Ethereum Network
 */

const provider = new HDWalletProvider(
  'tunnel clap ostrich pig hello zoo tray damp polar ordinary inquiry isolate',
  'https://rinkeby.infura.io/v3/a78b61935e184a04a723e1b22a617f3e'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: '0x' + compiledFactory.bytecode })
    .send({ from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};
deploy();
