import React from 'react'
import Maintitle from '../components/maintitle'
import MaintitleR from '../components/maintitleR'
import './dashboard.css'
const Dashboard = () => {
  return (
    <div className='main'>
            <h1>Your Campaign <span>(4)</span></h1>
            <div className='main-in'>
              <div className='main-l'>
                  <Maintitle/>
              </div>
              <div className='main-r'>
                  <MaintitleR/>
              </div>
            </div>
            
        </div>
  )
}

export default Dashboard
