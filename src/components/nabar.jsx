import './navbar.css'
import nav_bar_1_1 from '../image/Dashboard.png'
import nav_bar_1_2 from '../image/Campaign.png'
import nav_bar_1_3 from '../image/Payment.png'
import nav_bar_1_4 from '../image/Withdraw.png'
import nav_bar_1_5 from '../image/Profile.png'
import nav_bar_1_6 from '../image/Logout.png'
import nav_bar_2_1 from '../image/Dark.png'
import React, { useState, useEffect } from 'react';
const Nabar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    
    <div>
        <div className='nav-bar'>
            <div className='nav-bar-1'>
              <img src={nav_bar_1_1} alt='' />
              <img src={nav_bar_1_2} alt='' />
              <img src={nav_bar_1_3} alt='' />
              <img src={nav_bar_1_4} alt='' />
              <img src={nav_bar_1_5} alt='' />
              <img src={nav_bar_1_6} alt='' />
            </div>
            <div className='nav-bar-2'>
              <img src={nav_bar_2_1} alt='' onClick={toggleDarkMode}/>
            </div>
          </div>

    </div>
  )
}

export default Nabar
