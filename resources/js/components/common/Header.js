import React, { useEffect, useState } from 'react'
// import {Link} from 'react-router-dom'
import logo from '../../assets/images/careshare-logo.png';
import chervonDown from '../../assets/images/chervon-down.svg';
import BreastCancer from '../../assets/images/cancer-category-icons/breast-cancer.svg';
import OvarianCancer from '../../assets/images/cancer-category-icons/ovarian-cancer.svg';
import ThroatCancer from '../../assets/images/cancer-category-icons/throat-cancer.svg';
import LungCancer from '../../assets/images/cancer-category-icons/lung-cancer.svg';
import PancreaticCancer from '../../assets/images/cancer-category-icons/pancreatic-cancer.svg';
import HeadandNeckCancer from '../../assets/images/cancer-category-icons/head-and-neck-cancer.svg';
import BoneCancer from '../../assets/images/cancer-category-icons/bone-cancer.svg';
import BloodCancer from '../../assets/images/cancer-category-icons/blood-cancer.svg';
import Coloncancer from '../../assets/images/cancer-category-icons/colon-cancer.svg';
import LiverCancer from '../../assets/images/cancer-category-icons/liver-cancer.svg';
import SkinCancer from '../../assets/images/cancer-category-icons/skin-cancer.svg';
import BrainCancer from '../../assets/images/cancer-category-icons/brain-cancer.svg';
import StomachCancer from '../../assets/images/cancer-category-icons/stomach-cancer.svg';
import TesticularCancer from '../../assets/images/cancer-category-icons/testicular-cancer.svg';
import ProstateCancer from '../../assets/images/cancer-category-icons/prostate-cancer.svg';
import ThyroidCancer from '../../assets/images/cancer-category-icons/thyroid-cancer.svg';
import BladderCancer from '../../assets/images/cancer-category-icons/bladder-cancer.svg';
import GallbladderCancer from '../../assets/images/cancer-category-icons/gallbladder-cancer.svg';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [cancerBlogs, setCancerBlogs] = useState([]);
    const cancerIcons = {
        "BreastCancer": BreastCancer,
        "OvarianCancer": OvarianCancer,
        "ThroatCancer": ThroatCancer,
        "LungCancer": LungCancer,
        "PancreaticCancer": PancreaticCancer,
        "HeadandNeckCancer": HeadandNeckCancer,
        "BoneCancer": BoneCancer,
        "BloodCancer": BloodCancer,
        "Coloncancer": Coloncancer,
        "LiverCancer": LiverCancer,
        "SkinCancer": SkinCancer,
        "BrainCancer": BrainCancer,
        "StomachCancer": StomachCancer,
        "TesticularCancer": TesticularCancer,
        "ProstateCancer": ProstateCancer,
        "ThyroidCancer": ThyroidCancer,
        "BladderCancer": BladderCancer,
        "GallbladderCancer": GallbladderCancer,
    };

    useEffect(() => {
        fetchPosts();
    },[])


    const fetchPosts = () => {

        axios.get('/api/blogCancer', {
            // params: {
            //     category: this.props.category, limit: this.props.limit
            // }
        })
            .then(response => {
                setCancerBlogs(response.data.result)
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div className="hero-anime">
            <div className="navigation-wrap start-header start-style">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="navbar navbar-expand-md navbar-light m-0">

                                <NavLink className="navbar-brand p-3" to="/" ><img src={logo} /></NavLink>

                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto py-4 py-md-0" style={{alignItems:"center"}}>
                                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-5">
                                            <NavLink className="nav-link" to="/">HOME</NavLink>
                                        </li>
                                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-5">
                                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">ABOUT CANCER <img height="9" src={chervonDown} /></a>
                                            <div className="dropdown-menu cancer-dropdown">
                                                {cancerBlogs.length>0 && cancerBlogs.map((blog) => (
                                                    <NavLink className="dropdown-item" to={`/blog/${blog.id}`}><img src={cancerIcons[blog.title.replaceAll(" ","")]} /> {blog.title}</NavLink>
                                                ))}
                                            </div>
                                        </li>
                                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-5">
                                            <NavLink className="nav-link" to="/blogs">BLOGS</NavLink>
                                        </li>
                                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-5 signup-btn-wrap">
                                            <button className="btn btn-primary header-signup-btn" type="button">SIGNUP FOR FREE CONSULTATION</button>
                                        </li>
                                    </ul>
                                </div>

                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header
