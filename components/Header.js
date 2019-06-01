import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';

export default () => {
  return (
    <Menu style={{ marginTop: '10px' }}>
      <Menu.Item>INDIEGOGO</Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item>Campaigns</Menu.Item>
        <Menu.Item>
          <Icon style={{ margin: 0, padding: 0 }} name="plus" />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};
