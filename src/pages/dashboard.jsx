import React from 'react'
import Nabar from '../components/nabar';
import Dashboard from '../components/dashboard';
import './dashboard.css'
import Card1 from '../components/card1';
import Card2 from '../components/card2';

const dashboard = () => {
  return (
    <div>
      <div className='wrap'>
        <div className='wrap-in'>
          <Nabar />
          <div className='page-in'>
            <Dashboard/>
            <Card1/>
            <Card2/>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default dashboard
