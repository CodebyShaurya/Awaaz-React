import React from 'react';
import '../CSS/Nav.css';
import logo from '../Assets/Main_Logo_white.png'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='navbar'>
            <div className='logset'><a href='http://localhost:3000/'><img src={logo} className='logopic' alt='AWAAZ' /></a></div>
            <div className='logmid'>
                <Link to="/" className='Navcontent' style={{textDecoration:"none", color:"white"}}>Home</Link>
                <Link to="/about" className='Navcontent' style={{textDecoration:"none", color:"white"}} >About</Link>
                <Link to="/learnings" className='Navcontent' style={{textDecoration:"none", color:"white"}}>Learning</Link>
                <Link to="/dashboard" className='Navcontent' style={{textDecoration:"none", color:"white"}}>Dashboard</Link>
            </div>
            <div className='logend'>
                <button className='SignOut Navcontent1'> Sign In </button>

            </div>
        </nav>

    )
}

export default Nav;