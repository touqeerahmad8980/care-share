import React from 'react'
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => (
    <div className="footer_section">
        <div className='container'>
            <ul className='footer_social_icons'>
                <li><a href='#'><i className='fa fa-facebook'></i></a></li>
                <li><a href='#'><i className='fa fa-linkedin'></i></a></li>
                <li><a href='#'><i className='fa fa-instagram'></i></a></li>
                <li><a href='#'><i className='fa fa-twitter'></i></a></li>
            </ul>
            <ul className='footer_links'>
                <li><a href='#'>About us</a></li>
                <li><a href='#'>Our Doctors</a></li>
                <li><a href='#'>Careers</a></li>
                <li><a href='#'>Press</a></li>
                <li><NavLink to='/contact'>Contact us</NavLink></li>
                <li><a href='#'>FAQ</a></li>
                <li><a href='#'>Privacy Policy</a></li>
                <li><a href='#'>T&amp;C</a></li>
            </ul>
            <p className='copy_right'>Copyright©2021, CareShare. All Rights Reserved.</p>
        </div>
    </div>
)

export default Footer;
