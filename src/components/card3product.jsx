import React from 'react'
import './card1product.css'
import card_2_1_9 from '../image/card_2_1_9.png'
import card_2_1_10 from '../image/card_2_1_10.png'
import card_2_1_11 from '../image/card_2_1_11.png'
import card_2_1_12 from '../image/card_2_1_12.png'
import card_2_9 from '../image/card_2_9.png'
import card_2_10 from '../image/card_2_10.png'
import card_2_11 from '../image/card_2_11.png'
import card_2_12 from '../image/card_2_12.png'
import card_1_r_1 from '../image/floder.png'
const Card3product = () => {
  return (
    <div className='card-2-item'>
        <div className='card-2-1'>
            <img src={card_2_9} alt=''/>
        <div className='card-2-1-info'>
            <div className='card-2-1-info-1'>
                <img src={card_1_r_1} alt=''/>
                <p>Education</p>
            </div>
            <div className='card-2-1-info-2'>
                <h1>Powered Kits Learning Boxes</h1>
                <p>Fun, durable and reusable boxes with
            <br/>eco-friendly options.</p>
            </div>
            <div className='card-2-1-info-3'>
                <div className='card-2-1-info-3-1'>
                    <p>$2000</p>
                    <span>Raised of $1,900</span>
                </div>
                <div className='card-2-1-info-3-1'>
                    <p>173</p>
                    <span>Total backers</span>
                </div>
            </div>
        </div>
        <div className='card-2-1-author'>
            <img src={card_2_1_9} alt=''/>
            <span>by</span>
            <p>Mahfuzul Nabil</p>
        </div>
        </div>
        <div className='card-2-1'>
            <img src={card_2_10} alt=''/>
        <div className='card-2-1-info'>
            <div className='card-2-1-info-1'>
                <img src={card_1_r_1} alt=''/>
                <p>Real Estate</p>
            </div>
            <div className='card-2-1-info-2'>
                <h1>Building Hope Village</h1>
                <p>Together we can create access for
                <br/>everyone!</p>
            </div>
            <div className='card-2-1-info-3'>
            <div className='card-2-1-info-3-1'>
                <p>$250</p>
                <span>Raised of $1,900</span>
            </div>
            <div className='card-2-1-info-3-1'>
                <p>50</p>
                <span>Total backers</span>
            </div>
            </div>
        </div>
        <div className='card-2-1-author'>
            <img src={card_2_1_10} alt=''/>
            <span>by</span>
            <p>Adom Shafi</p>
        </div>
        </div>
        <div className='card-2-1'>
        <img src={card_2_11} alt=''/>
        <div className='card-2-1-info'>
            <div className='card-2-1-info-1'>
            <img src={card_1_r_1} alt=''/>
            <p>Accessories</p>
            </div>
            <div className='card-2-1-info-2'>
            <h1>New iMac For My Business!</h1>
            <p>My computer decided to die. As a result,
            <br/>my small business.</p>
            </div>
            <div className='card-2-1-info-3'>
            <div className='card-2-1-info-3-1'>
                <p>$1,200</p>
                <span>Raised of $1,800</span>
            </div>
            <div className='card-2-1-info-3-1'>
                <p>12</p>
                <span>Total backers</span>
            </div>
            </div>
        </div>
        <div className='card-2-1-author'>
            <img src={card_2_1_11} alt=''/>
            <span>by</span>
            <p>Sami Ahmed</p>
        </div>
        </div>
        <div className='card-2-1'>
        <img src={card_2_12} alt=''/>
        <div className='card-2-1-info'>
            <div className='card-2-1-info-1'>
            <img src={card_1_r_1} alt=''/>
            <p>Home</p>
            </div>
            <div className='card-2-1-info-2'>
            <h1>The Watchman's Chairs</h1>
            <p>Your home for indie and classic cinema
            <br/>has just been handed an...</p>
            </div>
            <div className='card-2-1-info-3'>
            <div className='card-2-1-info-3-1'>
                <p>$5,000</p>
                <span>Raised of $10,900</span>
            </div>
            <div className='card-2-1-info-3-1'>
                <p>100</p>
                <span>Total backers</span>
            </div>
            </div>
        </div>
        <div className='card-2-1-author'>
            <img src={card_2_1_12} alt=''/>
            <span>by</span>
            <p>Nill</p>
        </div>
        </div>
    </div>
  )
}

export default Card3product
