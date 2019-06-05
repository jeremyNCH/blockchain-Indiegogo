import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';

class CampaignShow extends Component {
  static async getInitialProps(props) {
    // props here is not the class obj 'props' -> `address` is url params/query
    const campaign = Campaign(props.query.address);
    const summary = await campaign.methods.getSummary().call();

    // summary is an object with keys 0,1,2,3... like an array -> better to destructure and return
    return {
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      managerAddress: summary[4]
    };
  }

  renderCards = () => {
    const {
      balance,
      managerAddress,
      minimumContribution,
      requestsCount,
      approversCount
    } = this.props;

    const items = [
      {
        header: managerAddress,
        meta: 'Address of Manager',
        description:
          'The manager created this campaign and can create requests to withdraw funds',
        style: { overflowWrap: 'break-word' }
      }
    ];

    return <Card.Group items={items} />;
  };

  render() {
    return (
      <Layout>
        <h3>CampaignShow</h3>
        {this.renderCards()}
      </Layout>
    );
  }
}

export default CampaignShow;
