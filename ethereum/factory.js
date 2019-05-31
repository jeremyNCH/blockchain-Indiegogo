import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xB338B217B2dC0f34e0477d05F412DaF45Af6D9B5'
);

export default instance;
