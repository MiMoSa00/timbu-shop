import React from 'react'
import TopBar from '../NavBar Section/TopBar'
import './checkout.css'

// imported icons
import { MdOutlineRadioButtonChecked } from 'react-icons/md'
import { IoIosRadioButtonOff } from 'react-icons/io'

// imported images
import img3 from '../../assets/img12.png'
import img10 from '../../assets/img11.png'


const Checkout = () => {


  return (
    <>
      <TopBar />
      <div className="diver">


        <div className='checkoutSection'>

          <h1>Checkout</h1>
          <div className='axis'>
            <div className="info">
              <div className="top">
                <div className="checkl">
                  <h2>Buyer information</h2>
                  <small>Edit</small>
                </div>

                <p style={{ lineHeight: "1.6" }}>42 Westend Road, Beckingson Avenue, Lagos <br /> 0813 857 3833  <br />linwhitfall@gmail.com</p>
              </div>

              <div className="delivery">
                <h2>Delivery information</h2>
                <div className="form">
                  <label>State</label>
                  <input type="text" />
                  <label>City</label>
                  <input type="text" />
                  <label>Town</label>
                  <input type="text" />
                  <label>Address</label>
                  <input type="text" />
                </div>

              </div>
              <div className="method">
                <h2>Delivery method</h2>
                <p>Enter your shipping address to view available shipping methods.</p>

                <div className="methodContain">
                  <div className="first">
                    <MdOutlineRadioButtonChecked className='checkicon' />

                    <span>Pickup</span>
                  </div>
                  <div className="second">
                    <IoIosRadioButtonOff className='checkicon' />

                    <span>Standard delivery</span>
                    <p className='checkList'>Enter your delivery information to view available delivery prices.</p>
                    <input type="new" placeholder='Enter your delivery information to view available delivery prices.' />
                  </div>

                </div>
              </div>


              <div className="empty"></div>
            </div>


            <div className="paymentSection">
              <div className="edit">
                <h2>Order total</h2>
                <small>Edit</small>
              </div>

              <div className="checkItem">
                <img src={img3} alt="Image Name" style={{ backgroundColor: "rgb(225, 230, 230)" }} />
                   <div className="checkers">
                   <h6>Reclaimed Vintage men loose fit jean in vintage mid blue</h6>
                <small>W34 L42</small>
                <p>₦4,000</p>
                <span>Qty: 1</span>

                   </div>
               
              </div>

              <div className="checkItem">
                <img src={img10} alt="Image Name" style={{ backgroundColor: "rgb(225, 230, 230)"}} />

                <div className="checkers">
                <h6>Sky Stock Blue Jean For Men</h6>
                <small >W34 L42</small>
                <p>₦14,500</p>
                <span>Qty: 1</span>
                </div>
                
              </div>

              <div className="pay">
                <div className="money">
                <p>2   items</p>
               <p>₦18,500</p>
                </div>
                <div className="checkPay">
                  <p>Delivery</p>
                  <p>₦1,500</p>
                </div>
                <div className="checkTotal">
                <p>Total to pay</p>
                <p>₦20,000</p>
                </div>
               
              </div>
              <button className='paye'>Pay</button>
            </div>
          </div>
          <div className="checkFoot">
            <p >&copy;2024 TIMBU</p>
          </div>


        </div>
      </div>
    </>

  )
}

export default Checkout