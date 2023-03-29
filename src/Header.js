import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

  return (
<div className='header'>
    <Link to='/' style={{ textDecoration: 'none' }}>
        <h2 className='header__logo'>Raj Namkeens</h2>
        {/* <img 
            className='header__logo'
            // src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
            src='./images/raj_logo.png'
            alt='logo'
            /> */}
    </Link>

    <div className="header__main__nav">
            <ul>
                <li>New Arrival</li><KeyboardArrowDownIcon className='header_main_nav_arrow'/>
                <li>Namkeen</li><KeyboardArrowDownIcon className='header_main_nav_arrow'/>
                <li>Sweet Items</li><KeyboardArrowDownIcon className='header_main_nav_arrow'/>
                <li>WFH Essentials</li><KeyboardArrowDownIcon className='header_main_nav_arrow'/>
            </ul>
    </div>
        
    <div className='header__search'>
        <input className='header__searchInput' type='text' placeholder='Search...' />
        <SearchIcon className="header__searchIcon" />
        {/* Logo */}
    </div>

    
    
    <div className='header__nav'>
            <Link to={!user && '/login'} style={{ textDecoration: 'none' }}>
        <div onClick={handleAuthentication} className='header__option'>
            <span className='header__optionLineOne'>Hello Guest</span>
            <span className='header__optionLineTwo'>{user ? 'Sign Out': 'Sign In'}</span>
         </div>
            </Link>
        <div className='header__option'>
            <span className='header__optionLineOne'>Returns</span>
            <span className='header__optionLineTwo'>Orders</span>
        </div>

        <div className='header__option'>
            <span className='header__optionLineOne'>Hello</span>
            <span className='header__optionLineTwo'>Somesh</span>
        </div>
        <Link to='/checkout' style={{ textDecoration: 'none' }}>
            <div className='header__optionBasket'>
                <ShoppingBasketIcon />
                <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
            </div>
        </Link>
    </div>
</div>
  )
}

export default Header