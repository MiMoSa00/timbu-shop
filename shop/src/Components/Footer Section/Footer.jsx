import React, {useState} from 'react'
import './Footer.scss'


// Imported Images
import Logo from '../../assets/TIMBU.png'

// Imported Icon
// import {TiSocialFacebook } from "react-icons/ti"
// import {AiOutlineTwitter  } from "react-icons/ai"
// import {AiFillYoutube  } from "react-icons/ai"
import {AiFillInstagram  } from "react-icons/ai"
import {FaTiktok  } from "react-icons/fa"
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const Footer = () => {

  const [dropdownVisible1, setDropdownVisible1] = useState(false);

  const toggleDropdown1 = () => {
    setDropdownVisible1(!dropdownVisible1);
  };
  const [dropdownVisible2, setDropdownVisible2] = useState(false);

  const toggleDropdown2 = () => {
    setDropdownVisible2(!dropdownVisible2);
  };
  const [dropdownVisible3, setDropdownVisible3] = useState(false);

  const toggleDropdown3 = () => {
    setDropdownVisible3(!dropdownVisible3);
  };
  return (
    <>
    <div className='footer'>
      <div className="sectionContainer container grid">
          <div className="gridOne">
            <div className="logoDiv">
              <img src={Logo} className='Logo' />
            </div>
            <p style={{color:"#636363", fontSize:"14px", fontWeight:"300"}} className='fott' >We breathe life into pre-loved garments, transforming them into timeless expressions of style that echo whispers of the past.
           </p>

           <p className="foot1" style={{color:"#636363", fontSize:"14px", fontWeight:"300"}}>
           Welcome to Timbu, a place where fashion has a heart, and your story unfolds with every attire you put on.
           </p>
            <div className="socialIcon flex" style={{display:"flex", alignItems:"center", gap:"10px"}}>
             
              <AiFillInstagram className='icon' />
              <p  className='newT'>_TIMBU</p>
              <p  style={{fontSize:"14px", fontWeight:"400"}} className='oldT'>TIMBU_ng</p>
              <FaTiktok className='icon' style={{ marginLeft:"24px"}}/>
              <p className='Ficon'>Tiktok</p>
            </div>
          </div>

          <div className="footerLinks" style={{flexBasis:"17%"}}>

         
            <div className="large">
            <span className="linkTitle">Shop</span>
            <li>
              <a href="">Men</a>
            </li>
            <li>
              <a href="">Women</a>
            </li>
            <li>
              <a href="">Unisex</a>
            </li>
            </div>
           
          </div>


          <div className="footerLinks" style={{flexBasis:"22%"}}>

          <div className="large">

         
            <span className="linkTitle">Customer support</span>
            <li>
              <a href="">FAQs</a>
            </li>
            <li>
              <a href="">Shipping</a>
            </li>
            <li>
              <a href="">Returns</a>
            </li>
            <li>
              <a href="">Help & Contact</a>
            </li>
            </div>
          </div>


          <div className="footerLinks">


         
          <div className="large">
            <span className="linkTitle">About TIMBU</span>
            <li>
              <a href="">The story</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
           
            <li>
              <a href="">Careers</a>
            </li>
            </div>
         
          </div>

          <div className="smallLink">

          <div className='smallS'>
            <span >Shop </span>
            <div className="footi" onClick={toggleDropdown1}>
            {dropdownVisible1?< IoIosArrowUp/> :<  IoIosArrowDown/> }
            </div>
            {dropdownVisible1 && (
                  <div className='ip-container'>
                     <li>
              <a href="">Men</a>
            </li>
            <li>
              <a href="">Women</a>
            </li>
            <li>
              <a href="">Unisex</a>
            </li>
                     </div>
                )}
            </div>
          <div className='smallS'>
            <span > Customer support  </span>

            <div className="footi" onClick={toggleDropdown2}>
            {dropdownVisible2?< IoIosArrowUp/> :<  IoIosArrowDown/> }
            </div>
            {dropdownVisible2 && (
                  <div className='ip-container'>
                     <li>
              <a href="">FAQs</a>
            </li>
            <li>
              <a href="">Shipping</a>
            </li>
            <li>
              <a href="">Returns</a>
            </li>
            <li>
              <a href="">Help & Contact</a>
            </li>
                     </div>
                )}
            </div>

          <div className='smallS'>
            <span > About TIMBU </span>

            <div className="footi" onClick={toggleDropdown3}>
            {dropdownVisible3?< IoIosArrowUp/> :<  IoIosArrowDown/> }
            </div>

            {dropdownVisible3 && (
                  <div className='ip-container'>
                   <li>
              <a href="">The story</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
           
            <li>
              <a href="">Careers</a>
            </li>
                     </div>
                )}
            </div>
          </div>



      </div>

      
    </div>
    <div className="copyRightDiv flex" style={{display:"flex", justifyContent:"space-between", paddingLeft:"2px", paddingRight:"92px"}} >
      
    <p className='footerp'>&copy;2024 TIMBU</p>
    <div className="pry" style={{display:"flex", gap:"34px"}}>
    <p>Privacy Policy</p> 
    <p>Terms of Service</p> 
      </div> 
   
   </div>
   </>
  )
}

export default Footer