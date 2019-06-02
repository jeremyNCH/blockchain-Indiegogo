import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
  return (
    <Menu style={{ marginTop: '10px' }}>
      <Link route="/">
        <a className="item">INDIEGOGO</a>
      </Link>

      <Menu.Menu position="right">
        <Link route="/">
          <a className="item">Campaigns</a>
        </Link>

        <Link route="/campaigns/new">
          <a className="item">
            <Icon style={{ margin: 0, padding: 0 }} name="plus" />
          </a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};
