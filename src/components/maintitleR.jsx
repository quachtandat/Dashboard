import React from 'react'
import './maintitleR.css'
import card_1_r_1 from '../image/floder.png'
const MaintitleR = () => {
  return (
    <div className='card-1-r'>
        <div className='card-1-r-1'>
            <img src={card_1_r_1} alt=''/>
            <p>Architecture</p>
        </div>
        <div className='card-1-r-2'>
            <h2>Remake - We Make architecture exhibition</h2>
            <p>Remake - We Make: an exhibition about architecture's social
        <br/>agency in the face of urbanisation</p>
        </div>
        <div className='card-1-r-3'>
            <div className='card-1-r-3-1'></div>
            <div className='card-1-r-3-2'></div>
        </div>
        <div className='card-1-r-4'>
            <div className='card-1-r-4-1'>
            <h2>$2,000</h2>
            <p>Raised of $2,500</p>
            </div>
            <div className='card-1-r-4-1'>
            <h2>173</h2>
            <p>Total backers</p>
            </div>
            <div className='card-1-r-4-1'>
            <h2>30</h2>
            <p>Days left</p>
            </div>
        </div>
    </div>
  )
}

export default MaintitleR
