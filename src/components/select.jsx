import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import up from '../image/Up.png'
import './select.css';

const SelectDropdown = () => {
  const [open, setOpen] = useState(false);

  // const handleMenuClick = (e) => {
  //   if (e.key === '3') {
  //     setOpen(false);
  //   }
  // };

  const handleOpenChange = (nextOpen) => {
    setOpen(nextOpen);
  };

  const items = [
    {
      label: (
        <div className='Tech'>
          <h1>Tech & Innovation</h1>
          <div className='Tech-in'>
            <ul>
                <li>Audio</li>
                <li>Camera Gear</li>
                <li>Education</li>
                <li>Green Tech</li>
                <li>Clothing & Wearables</li>
                <li>Food & Beverage</li>
            </ul>
            <ul>
                <li>Health & Fitness</li>
                <li>Home</li>
                <li>Phones & Accessories</li>
                <li>Productivity</li>
                <li>Transportation</li>
                <li>Travel & Outdoors</li>
            </ul>
          </div>
          
        </div>
      ),
      key: '1',
    },
    {
      label: (
        <div className='Tech'>
          <h1>Creative Works</h1>
          <div className='Tech-in'>
            <ul>
            <li>Comics</li>
            <li>Art</li>
            <li>Dance & Theater</li>
            <li>Film</li>
            <li>Music</li>
            <li>Photography</li>
            </ul>
            <ul>
            <li>Podcast, Blogs & Vlogs</li>
            <li>Tablet Games</li>
            <li>Video Games</li>
            <li>Web Series</li>
            <li>Architecture</li>
            </ul>
          </div>
          
        </div>
      ),
      key: '2',
    },
    {
      label: (
        <div className='Tech'>
          <h1>Community Project</h1>
          <div className='Tech-in'>
            <ul>
            <li>Culture</li>
            <li>Environment</li>
            <li>Human Rights</li>
            <li>Local Business</li>
            <li>Wellness</li>
            </ul>
          </div>
          
        </div>
      ),
      key: '3',
    },
  ];

  return (
    <Dropdown
      overlay={
        <div className='dropdown-content'>
          {items.map(item => (
            <div key={item.key}>
              {item.label}
            </div>
          ))}
        </div>
      }
      onOpenChange={handleOpenChange}
      open={open}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <img src={up} alt='' />
          Hover me
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

export default SelectDropdown;
