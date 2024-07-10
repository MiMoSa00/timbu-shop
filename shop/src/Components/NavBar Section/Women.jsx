import React, { useState } from 'react'
import Footer from '../Footer Section/Footer'
import { Link } from 'react-router-dom'
import './Nav.css'

// Imported Icons
import { BiSearchAlt } from 'react-icons/bi'
import { FiUser } from 'react-icons/fi'
import { RiShoppingBag3Line } from 'react-icons/ri'
import { FiFilter } from 'react-icons/fi'
// import { AiOutlineHeart } from 'react-icons/ai'
// import { IoMenu } from 'react-icons/io5'
// import { BsArrowRightShort } from 'react-icons/bs'
// import { BsQuestionCircle } from 'react-icons/bs'


// Imported Image
import img from '../../assets/TIMBU.png'
import img1 from '../../assets/newimg.png'
// import img0 from '../../assets/general.png'
import img2 from '../../assets/Group.png'
import img3 from '../../assets/female1.png'
import img4 from '../../assets/img8.png'
import img5 from '../../assets/female2.png'
import img6 from '../../assets/female3.png'
import img7 from '../../assets/female4.png'
import img8 from '../../assets/female5.png'
import img9 from '../../assets/female6.png'
import img10 from '../../assets/female7.png'





const Women = () => {


    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
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
                                    <li><a href="#home">Men</a></li>
                                    <li><a href="#about">Women</a></li>

                                </ul>
                            </nav>
                        )}

                        <img src={img} />
                    </div>

                    <Link to="/men">
                    <button style={{  color: '#8A8A8A', fontWeight: "600", fontSize: "19px", backgroundColor:"transparent", border:"none" }} className='gender'>Men</button>
                    </Link>
                 
                    <Link to="/women">
                    <button style={{ backgroundColor:"transparent", border:"none",fontWeight: "600", fontSize: "19px"  }} className='gender'>Women</button>
                    </Link>
                </div>

                <div className="iconic" style={{ display: "flex", gap: "29px" }}>
                    <div className="searchBar flex" >
                        <BiSearchAlt className="icone" style={{ marginLeft: "10px", fontSize: "20px" }} />
                        <div className="mini" >

                            <input type="text" placeholder='Search for items' />
                        </div>


                    </div>

                    <div className="adminDiv flex">
                        <FiUser className="icon" />
                        <RiShoppingBag3Line className="icon" />

                    </div>
                </div>




            </div>

            <div className="cardSection flex">
                <div className="rightCard flex">
                    <h1 >Discover your Perfect Style With Us</h1>

                    <div className="videoDiv">
                        <img src={img1} className='image' />
                        {/* <img src={img0} className='images'/> */}
                        <div className="Overlay">
                            <img src={img2} className='overlay' />
                        </div>


                    </div>
                </div>

                <div className="topButton" style={{ display: "flex", marginTop: "100px" }}>


                    <div className="buttons flex" style={{ gap: "1rem", justifyContent: "space-between" }}>
                        <button className='btn' style={{ width: "57px", color: "white", backgroundColor: "black" }}>All</button>
                        <button className='btn transparent' style={{ width: "120px" }}>New Arrivals</button>
                        <button className='btn transparent'>Under 5k</button>
                        <button className='btn transparent'>Jeans</button>
                        <button className='btn transparent'>T-Shirts</button>
                        <button className='btn transparent '>Shorts</button>
                        <button className='btn transparent'>Formals</button>
                        <button className='btn transparent'>Hats</button>
                    </div>
                    <button className="newbtn"> <FiFilter /> Filters</button>
                </div>

                <div className="leftCard flex">
                    <div className="main flex">
                        <h2>All items</h2>
                        <p>245 items</p>
                    </div>
                    <div className="textDiv">

                        <div className="secContainer">


                            <div className="new">

                                <div className="singleItem">
                                    <div className="iconCase" >
                                        <RiShoppingBag3Line className="icon" />
                                    </div>                                <img src={img3} alt="Image Name" style={{ backgroundColor: "rgb(225, 230, 230)" }} />

                                    <h6>High Waisted Jean For Ladies-Black</h6>
                                    <small>W34 L42</small>
                                    <p>₦10,000</p>
                                </div>


                                <div className="singleItem">
                                    <div className="iconCase">
                                        <RiShoppingBag3Line className="icon" />
                                    </div>                                <img src={img4} alt="Image Name" />

                                    <h6>Plain Grey Unisex Hoodie</h6>
                                    <small>All sizes available</small>
                                    <p>₦8,500</p>
                                </div>


                                <div className="singleItem">
                                    <div className="iconCase">
                                        <RiShoppingBag3Line className="icon" />
                                    </div>                                <img src={img5}  style={{backgroundColor:"rgb(225, 230, 230"}}alt="Image Name" />
                                    <h6>Denim High Waist Mini Hip Short Skirt</h6>
                                    <small>W34 L42</small>
                                    <p>₦14,000</p>
                                </div>




                                <div className="singleItem">
                                    <div className="iconCase"  >
                                        <RiShoppingBag3Line className="icon" />
                                    </div>                                <img src={img6} alt="Image Name" />

                                    <h6>Stylish Crop Top - Top For Ladies </h6>
                                    <small>All sizes available</small>
                                    <p>₦8,500</p>
                                </div>

                            </div>

                            <div className="old">

                                <div className="singleItem" >
                                    <div className="iconCase" style={{bottom:"13rem" , width:"56px", height:"56px", backgroundColor:"white", opacity:"0.7"}}>
                                        <RiShoppingBag3Line className="icon" style={{ marginBottom: "4.4rem" }} />
                                    </div>                                <img src={img7} style={{backgroundColor:"rgb(225, 230, 230"}} alt="Image Name" />
                                    <h6>Crop Top Stylish Luxury Top For Ladies</h6>
                                    <small>All sizes available</small>
                                    <p>₦5,000</p>
                                </div>

                                <div className="singleItem">
                                    <div className="iconCase"  style={{bottom:"13rem" , width:"56px", height:"56px", backgroundColor:"white", opacity:"0.7"}}>
                                        <RiShoppingBag3Line className="icon" style={{ marginBottom: "3.8rem" }} />
                                    </div>                                <img src={img8} alt="Image Name" style={{ backgroundColor: "rgb(225, 230, 230"}} />
                                    <h6>Ladies Vintage Shirts - Beach White Sleeve Fashion</h6>
                                    <small>All sizes available</small>
                                    <p>₦12,000</p>
                                </div>

                                <div className="singleItem">
                                    <div className="iconCase">
                                        <RiShoppingBag3Line className="icon" />
                                    </div>
                                    <img src={img9} alt="Image Name" style={{ backgroundColor: "rgb(225, 230, 230)", paddingBottom: "1rem" }} />
                                    <h6>Fitted Corporate Gown</h6>
                                    <small>All sizes available</small>
                                    <p>₦7,000</p>
                                </div>

                                <div className="singleItem">
                                    <div className="iconCase">
                                        <RiShoppingBag3Line className="icon" />
                                    </div>

                                    <img src={img10} alt="Image Name" style={{ backgroundColor: "rgb(225, 230, 230)", paddingBottom: "1rem" }} />
                                    <h6>Ladies Free A- Line Gown - Green</h6>
                                    <small>W34 L42</small>
                                    <p>₦8,000</p>
                                </div>

                            </div>




                        </div>

                        <div className="laster">
                            <p>You’ve viewed 70 of 254 products</p>
                            <button style={{ width: "186px", height: "44px", border: "1px solid black", backgroundColor: "transparent", fontSize: "16px", fontWeight: "600" }}>Load more</button>
                        </div>





                    </div>



                    <Footer />

                </div>
            </div>
        </div>
    )
}

export default Women