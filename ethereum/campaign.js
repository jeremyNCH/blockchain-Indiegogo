import web3 from './web3';
import Campaign from './build/Campaign.json';

// Use this file to get an existing Campaign contract using its address
export default address => {
  return new web3.eth.Contract(JSON.parse(Campaign.interface), address);
};
