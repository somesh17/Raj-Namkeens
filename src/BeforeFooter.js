import React from 'react';
import './BeforeFooter.css';
import MinorCrashOutlinedIcon from '@mui/icons-material/MinorCrashOutlined';
import SupportOutlinedIcon from '@mui/icons-material/SupportOutlined';
import LockResetOutlinedIcon from '@mui/icons-material/LockResetOutlined';
import PublishedWithChangesOutlinedIcon from '@mui/icons-material/PublishedWithChangesOutlined';

function BeforeFooter() {
  return (
    <div className='beforeFooter'>
        <div className='beforeFooter_wrapper'>
            <div className='beforeFooter_icon'><MinorCrashOutlinedIcon fontSize="large"/></div>
            <div className='beforeFooter_content'>
                <h2 style={{fontSize:'0.9rem'}}>FREE SHIPPING</h2>
                <p style={{fontSize:'0.9rem', color:'#939496'}}>Free express shipping & COD options on all orders</p>
            </div>
        </div>

        <div className='beforeFooter_wrapper'>
            <div className='beforeFooter_icon'><SupportOutlinedIcon fontSize="large"/></div>
            <div className='beforeFooter_content'>
                <h2 style={{fontSize:'0.9rem'}}>SUPPORT</h2>
                <p style={{fontSize:'0.9rem', color:'#939496'}}>Contact via Email info@rajnamkeens.com</p>
            </div>
        </div>

        <div className='beforeFooter_wrapper'>
            <div className='beforeFooter_icon'><LockResetOutlinedIcon fontSize="large"/></div>
            <div className='beforeFooter_content'>
                <h2 style={{fontSize:'0.9rem'}}>100% SECURE PAYMENT</h2>
                <p style={{fontSize:'0.9rem', color:'#939496'}}>Secure 3D payment through verified Gateways</p>
            </div>
        </div>

        <div className='beforeFooter_wrapper'>
            <div className='beforeFooter_icon'><PublishedWithChangesOutlinedIcon fontSize="large"/></div>
            <div className='beforeFooter_content'>
                <h2 style={{fontSize:'0.9rem'}}>10 DAYS REPLACEMENT</h2>
                <p style={{fontSize:'0.9rem', color:'#939496'}}>Full Replacement in case of any inconvenience with your order</p>
            </div>
        </div>

    </div>
  )
}

export default BeforeFooter