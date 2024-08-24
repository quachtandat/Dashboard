import React from 'react'
import card_2_1 from '../image/card-2-1.png'
import card_2_2 from '../image/card-2-2.png'
import card_2_3 from '../image/card-2-3.png'
import card_2_4 from '../image/card-2-4.png'
import card_1_r_1 from '../image/floder.png'
import card_2_1_1 from '../image/card-2-1-1.png'
import card_2_1_2 from '../image/card-2-1-2.png'
import card_2_1_3 from '../image/card-2-1-3.png'
import card_2_1_4 from '../image/card-2-1-4.png'
import './card1product.css'
const Card1product = () => {
  return (
    <div className='wrap'>
      <div className='card-2-item'>
                <div className='card-2-1'>
                  <img src={card_2_1} alt=''/>
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
                        <p>$2,000</p>
                        <span>Raised of $1,900</span>
                      </div>
                      <div className='card-2-1-info-3-1'>
                        <p>173</p>
                        <span>Total backers</span>
                      </div>
                    </div>
                  </div>
                  <div className='card-2-1-author'>
                    <img src={card_2_1_1} alt=''/>
                    <span>by</span>
                    <p>Mahfuzul Nabil</p>
                  </div>
                </div>
                <div className='card-2-1'>
                  <img src={card_2_2} alt=''/>
                  <div className='card-2-1-info'>
                    <div className='card-2-1-info-1'>
                      <img src={card_1_r_1} alt=''/>
                      <p>Real Estate</p>
                    </div>
                    <div className='card-2-1-info-2'>
                      <h1>Building Hope Village</h1>
                      <p>Together we can create access for<br/>
                      everyone!</p>
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
                    <img src={card_2_1_2} alt=''/>
                    <span>by</span>
                    <p>Adom Shafi</p>
                  </div>
                </div>
                <div className='card-2-1'>
                  <img src={card_2_3} alt=''/>
                  <div className='card-2-1-info'>
                    <div className='card-2-1-info-1'>
                      <img src={card_1_r_1} alt=''/>
                      <p>Real Estate</p>
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
                    <img src={card_2_1_3} alt=''/>
                    <span>by</span>
                    <p>Sami Ahmed</p>
                  </div>
                </div>
                <div className='card-2-1'>
                  <img src={card_2_4} alt=''/>
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
                    <img src={card_2_1_4} alt=''/>
                    <span>by</span>
                    <p>Nill</p>
                  </div>
                </div>
              </div>
 
    </div>
  )
}

export default Card1product
