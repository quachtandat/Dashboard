import React, { useState } from 'react';
import { Dropdown, Checkbox, Menu, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const CheckboxComponent = () => {
  const [selectedValue, setSelectedValue] = useState('Trending');

  const handleMenuClick = (e) => {
    setSelectedValue(e.key);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="Trending">
        <Checkbox checked={selectedValue === 'Trending'}>
          Trending
        </Checkbox>
      </Menu.Item>
      <Menu.Item key="Best Match">
        <Checkbox checked={selectedValue === 'Best Match'}>
          Best Match
        </Checkbox>
      </Menu.Item>
      <Menu.Item key="Newest">
        <Checkbox checked={selectedValue === 'Newest'}>
          Newest
        </Checkbox>
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Dropdown overlay={menu} trigger={['click']}>
        <Button>
          {selectedValue} <DownOutlined />
        </Button>
      </Dropdown>
    </div>
  );
};

export default CheckboxComponent;

