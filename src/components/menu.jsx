
import menu from '../image/menu.png'
import logo from '../image/Logo.png'
import Select from '../components/select'
import nav_bar_1_1 from '../image/Dashboard.png'
import nav_bar_1_2 from '../image/Campaign.png'
import nav_bar_1_3 from '../image/Payment.png'
import nav_bar_1_4 from '../image/Withdraw.png'
import nav_bar_1_5 from '../image/Profile.png'
import nav_bar_1_6 from '../image/Logout.png'
import nav_bar_2_1 from '../image/Dark.png'
import './menu.css'
import Button from './button'
import { useState } from 'react'
const Menu = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [isClose, setIsClose] = useState(false);

  const CloseWrapin = () => {
    setIsClose(!isClose);
  };

  return (
    <div className='wrap'>
    <div  className={`wrap-moblie ${isOpen ? 'open':''} `}>
       <div className='wrap-in-moblie'>
                  <div className='nav-top-moblie'>
                    <div className='nav-top-moblie-in'>
                      <img src={logo} alt=''/>
                      <Button />
                    </div>
                    <button className='menu-moblie'><img src={menu} alt='' onClick={() => { toggleMenu(); CloseWrapin(); }} /></button>
                  </div>
                  
                  <div className='nav-bar-moblie'>
                      <div className='nav-bar-moblie-items'>
                        <div className='nav-bar-2-moblie'>
                          <Select/>
                        </div>
                          
                          <div className='nav-bar-1-moblie'>
                            <img src={nav_bar_1_1} alt='' />
                            <p>Dashboard</p>
                          </div>
                          <div className='nav-bar-2-moblie'>
                            <img src={nav_bar_1_2} alt='' />
                            <p>Campaign</p>
                          </div>
                          <div className='nav-bar-2-moblie'>
                            <img src={nav_bar_1_3} alt='' />
                            <p>Payment</p>
                          </div>
                          <div className='nav-bar-2-moblie'>
                            <img src={nav_bar_1_4} alt='' />
                            <p>Withdraw</p>
                          </div>
                          <div className='nav-bar-2-moblie'>
                            <img src={nav_bar_1_5} alt='' />
                            <p>Profile</p>
                          </div>
                          <div className='nav-bar-2-moblie'>
                            <img src={nav_bar_1_6} alt='' />
                            <p>Logout</p>
                          </div>
                          <div className='nav-bar-2-moblie'>
                            <img src={nav_bar_2_1} alt='' />
                            <p>Light/Dark</p>
                        </div>
                      </div>
                  </div>
      `</div>
        {/*--------------- */}
    </div>
    <button className={`menu-1 ${isOpen ? 'open':''} `}><img src={menu} alt='' onClick={() => { toggleMenu(); CloseWrapin(); }}/></button>
    </div>

  )
}

export default Menu
