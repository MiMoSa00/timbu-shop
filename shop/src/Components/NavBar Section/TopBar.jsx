import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'


// imported icon
import { BiSearchAlt } from 'react-icons/bi'
import { FiUser } from 'react-icons/fi'
import { RiShoppingBag3Line } from 'react-icons/ri'
import { FiTrash } from 'react-icons/fi'

// imported img
import img from '../../assets/TIMBU.png'
import image1 from '../../assets/img12.png'
import image2 from '../../assets/img11.png'

const TopBar = () => {

  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    // Add some dummy items to the cart for demonstration
    {
      id: 1,

      name: 'Reclaimed Vintage men loose fit jean in vintage mid blue',
      code: 'W34L42',
      price: '₦4,000',
       image: image1
      
    },
    {
      id: 2,
      name: 'Sky Stock Blue Jean For Men',
      price: '₦14,500',
      code: 'W34 L42',
      image: image2,
         }
  ]);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <div className='topSection'>

      <div className="headerSection flex">
        <div className="title">

          <div className="imgCl">
            <div className="menu-icon" onClick={toggleMenu}>
              {isOpen ? '✖️' : '☰'}
            </div>
            {isOpen && (
              <nav className="nav-menu">
                <ul>
                  <Link to="/men">
                  <li>
                    Men
                    </li>
                  </Link>
                  <Link to="/women">
                  <li>
                   Women
                    </li>
                  </Link>
                  

                </ul>
              </nav>
            )}

            <img src={img} />
          </div>
          <Link to="/men">
            <button style={{ fontWeight: "600", fontSize: "19px", backgroundColor: "transparent", border: "none" }} className='gender'>Men</button>
          </Link>

          <Link to="/women">
            <button style={{ color: '#8A8A8A', backgroundColor: "transparent", border: "none", fontWeight: "600", fontSize: "19px" }} className='gender'>Women</button>
          </Link>

        </div>

        <div className="iconic" style={{ display: "flex", gap: "29px" }}>
          <div className="searchBar flex" >
            <BiSearchAlt className="icone"  />
            <div className="mini" >

              <input type="text" placeholder='Search for items' />
            </div>


          </div>

          <div className="adminDiv flex">
            <FiUser className="icon" />
            <div className='shops'>

              <RiShoppingBag3Line className="icon" onClick={toggleCart} />
              <div className="topnum">
                <small >2</small>
              </div>

              <div className={`cart-menu ${isCartOpen ? 'open' : ''}`}>
                <button onClick={toggleCart} className='cartHeader'>Cart</button>
                {cartItems.length > 0 ? (
                  <ul className='unl'>
                        
                    {cartItems.map(item => (
                      <li key={item.id} >
                       
                        <img src={item.image} className='cart-item-image' />
               
                     <div className="unlp">
                    <div className="top_icon">
                    <p >{item.name}</p>
                    <FiTrash className='newI'/>
                    </div>
                     
                     
                        <p style={{marginLeft:"59px", fontSize: "12px", color: "#666565", fontWeight: "400" }}>{item.code}</p>
                        <p style={{ marginLeft:"59px", fontSize: "12px", fontWeight: "400" }}>{item.price}</p>
                        <hr className='divider'/>
                     </div>

                      
                      </li>
                    ))}
                  </ul>
                  
                ) : (
                
                  <p>Your cart is empty.</p>
                )}
                 
                <Link to='/checkout'>
                  <button className='check'>Checkout</button>
                </Link>
                <div className='topbox'>
                   <p>-</p>
                   <p>1</p>
                   <p>+</p>
                   </div>

              </div>

            </div>


          </div>
        </div>




      </div>
    </div>
  )
}

export default TopBar