import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';

export default () => {
  return (
    <Menu>
      <Menu.Item>INDIEGOGO</Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item>Campaigns</Menu.Item>
        <Menu.Item>
          <Icon name="plus" />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};
