import React from 'react'
import './card1product.css'
import card_2_1_5 from '../image/card_2_1_5.png'
import card_2_1_6 from '../image/card_2_1_6.png'
import card_2_1_7 from '../image/card_2_1_7.png'
import card_2_1_8 from '../image/card_2_1_8.png'
import card_2_5 from '../image/card_2_5.png'
import card_2_6 from '../image/card_2_6.png'
import card_2_7 from '../image/card_2_7.png'
import card_2_8 from '../image/card_2_8.png'
import card_1_r_1 from '../image/floder.png'
const Card2product = () => {
  return (
    <div className='card-2-item'>
        <div className='card-2-1'>
            <img src={card_2_5} alt=''/>
        <div className='card-2-1-info'>
            <div className='card-2-1-info-1'>
                <img src={card_1_r_1} alt=''/>
                <p>Camera Gear</p>
            </div>
            <div className='card-2-1-info-2'>
                <h1>Advanced 4K Action Camera</h1>
                <p>THE SV RIG. - Start Creating Now Without
                <br/>Limitation.</p>
            </div>
            <div className='card-2-1-info-3'>
                <div className='card-2-1-info-3-1'>
                    <p>$500</p>
                    <span>Raised of $1,100</span>
                </div>
                <div className='card-2-1-info-3-1'>
                    <p>173</p>
                    <span>Total backers</span>
                </div>
            </div>
        </div>
        <div className='card-2-1-author'>
            <img src={card_2_1_5} alt=''/>
            <span>by</span>
            <p>Cham</p>
        </div>
        </div>
        <div className='card-2-1'>
            <img src={card_2_6} alt=''/>
        <div className='card-2-1-info'>
            <div className='card-2-1-info-1'>
                <img src={card_1_r_1} alt=''/>
                <p>Food</p>
            </div>
            <div className='card-2-1-info-2'>
                <h1>Resturants Open Business</h1>
                <p>A unique restaurant, bar, beer garden,
                <br/>and tailgating location</p>
            </div>
            <div className='card-2-1-info-3'>
            <div className='card-2-1-info-3-1'>
                <p>$950</p>
                <span>Raised of $1,200</span>
            </div>
            <div className='card-2-1-info-3-1'>
                <p>150</p>
                <span>Total backers</span>
            </div>
            </div>
        </div>
        <div className='card-2-1-author'>
            <img src={card_2_1_6} alt=''/>
            <span>by</span>
            <p>Mahbubul Alom</p>
        </div>
        </div>
        <div className='card-2-1'>
        <img src={card_2_7} alt=''/>
        <div className='card-2-1-info'>
            <div className='card-2-1-info-1'>
            <img src={card_1_r_1} alt=''/>
            <p>Comics</p>
            </div>
            <div className='card-2-1-info-2'>
            <h1>“Lost Soul” graphic novel</h1>
            <p>A team of ex-superheroes attempt to
            <br/>save a "monster"</p>
            </div>
            <div className='card-2-1-info-3'>
            <div className='card-2-1-info-3-1'>
                <p>$1,800</p>
                <span>Raised of $1,900</span>
            </div>
            <div className='card-2-1-info-3-1'>
                <p>05</p>
                <span>Total backers</span>
            </div>
            </div>
        </div>
        <div className='card-2-1-author'>
            <img src={card_2_1_7} alt=''/>
            <span>by</span>
            <p>Sajib Rahman</p>
        </div>
        </div>
        <div className='card-2-1'>
        <img src={card_2_8} alt=''/>
        <div className='card-2-1-info'>
            <div className='card-2-1-info-1'>
            <img src={card_1_r_1} alt=''/>
            <p>Clothe & Wearables</p>
            </div>
            <div className='card-2-1-info-2'>
            <h1>Cool Comfy Shoes easy on You</h1>
            <p>A new category of super comfortable
            <br/>casual shoes.</p>
            </div>
            <div className='card-2-1-info-3'>
            <div className='card-2-1-info-3-1'>
                <p>$4,000</p>
                <span>Raised of $5,900</span>
            </div>
            <div className='card-2-1-info-3-1'>
                <p>100</p>
                <span>Total backers</span>
            </div>
            </div>
        </div>
        <div className='card-2-1-author'>
            <img src={card_2_1_8} alt=''/>
            <span>by</span>
            <p>Saleh Ahmed</p>
        </div>
        </div>
    </div>

  )
}

export default Card2product
