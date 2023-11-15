import React from 'react';
import './Nav.css';
import logo from './Main_Logo_white.png'

const navigation = () => {
    return (
    <nav className='navbar'>
        <div className='logset'><a href='http://localhost:3000/'><img src={logo} className='logopic' alt='AWAAZ'/></a></div>

        <div className='logmid'>
            <a className='Navcontent'  >Home</a>
            <a className='Navcontent'>About</a>
            <a className='Navcontent'>Learning</a>
            <a className='Navcontent'>Dashboard</a>


        </div>

        <div className='logend'>
            
        <button className='SignOut Navcontent1'> Sign In </button>

        </div>
    </nav>
    
    )
}

export default navigation;