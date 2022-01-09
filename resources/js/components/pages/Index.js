import React from 'react'
// import BlogWidget from '../common/BlogWidget'
// import SideImage from '../../../../public/assets/images/BG_image_8.png'
import careshareBannerImage from '../../assets/images/careshare-banner-image.jpg';
import whatsappIcon from '../../assets/images/whatsapp-icon.png';

import './Home.css';

const Home = () => {
    return (
        <div>
            <section className='home-banner'>
                <div className="banner">
                    <div className="container">
                        <div className='row'>
                            <div className='col-md-6'>
                                <h2>24*7 PERSONALIZED</h2>
                                <h1>CANCER CARE</h1>
                                <h2 class="mt-0">JUST AT A CLICK</h2>
                                <p>From diangnosis to treatment to recovery <br />and beyond-guiding you at each step.</p>
                                <button href='#' className='btn btn-primary button'>Sign up For Free Consultation</button>
                                <span>or</span>
                                <img src={whatsappIcon} width="45" />
                            </div>
                            <div className='col-md-6'>
                                <img src={careshareBannerImage} className='image' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='container' style={{height:400}}> </div>
            </section>
        </div>
    )
}

export default Home
