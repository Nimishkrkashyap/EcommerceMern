import React, { useState } from 'react'
import "./Header.css"
import logo from '../../../images/logo.png'
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { BiSolidUserRectangle } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';



const Header = () => {
    const [showMenu, setShowMenu] = useState(false)

    const handleHide = () => {
        setShowMenu(false)
    }
    return (
        <>
            {showMenu ? (
                <>
                    <div className='headerContainer'>
                        <IoMdClose className='hamburgerClose' onClick={() => setShowMenu(!showMenu)} />
                        <img src={logo} alt='logo' />

                        <div>
                            <Link>Home</Link>
                            <Link to="/products" onClick={handleHide}>Products</Link>
                            <Link>About Us</Link>
                            <Link>Contact Us</Link>
                        </div>
                        <div>
                            <Link to='/search' onClick={handleHide}><FaSearch /></Link>
                            <FaShoppingCart />
                            <Link to='/login'  onClick={handleHide}><BiSolidUserRectangle /></Link>
                        </div>
                    </div>
                </>
            ) : <RxHamburgerMenu className='hamburger' onClick={() => setShowMenu(!showMenu)} />}
        </>
    )
}

export default Header
