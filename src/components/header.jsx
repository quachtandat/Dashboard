import './header.css'; // Đảm bảo file CSS tồn tại trong cùng thư mục
import 'antd/dist/reset.css';
import React, { useState, useEffect } from 'react';
import Logo from './logo';
import Timkiem from './Search';
import Avata from './avata';
import MenuR from './menuR';
import Menu from './menu';

const Header = () => {  
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) { 
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='header'>
      <div className={`header-in ${isScrolled ? 'scrolled' : ''}`}>
        <div className='header-in-l'>
          <Menu/>
          <div className='logo'>
            <Logo />
          </div>
          <Timkiem />
        </div>
        <div className='header-in-r'>
          <div className='header-in-r-1'>
            <MenuR/>
          </div>
          <Avata />
        </div>
      </div>
    </div>
  );
}

export default Header;
