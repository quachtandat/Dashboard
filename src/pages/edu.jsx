import React from 'react'
import Nabar from '../components/nabar';
import './dashboard.css'
import Background from '../components/background';
import Edu1 from '../components/edu1';
import SliderComponent from '../components/slider';


const Edu = () => {
  return (
    <div>
      <div className='wrap'>
        <div className='wrap-in'>
          <Nabar />
          <div className='page'>
            <Background/>
            <div className='page1'><Edu1/></div>
            <SliderComponent/>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default Edu
