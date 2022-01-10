import React from 'react'
// import BlogWidget from '../common/BlogWidget'
// import SideImage from '../../../../public/assets/images/BG_image_8.png'
import careshareBannerImage from '../../assets/images/careshare-banner-image.jpg';
import treatmentBeforeStep from '../../assets/images/treatment-before-step.png';
import treatmentDuringStep from '../../assets/images/treatment-during-step.png';
import treatmentAfterStep from '../../assets/images/treatment-after-step.png';
import whatsappIcon from '../../assets/images/whatsapp-icon.png';

import './Home.css';

const Home = () => {

    const [activeStep, setActiveStep] = React.useState('blue')
    const { innerWidth: screenWidth } = window;

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
            <section className='choose_careshare_section'>
                <div className='container'>
                    <div className='row_wrap mb-5 text-center'>
                        <h2 className='section_heading mb-2'>Why You Should Choose CareShare?</h2>
                        <p className='section_desc'>We make every moment matters- helping you from early diagnosis of cancer to<br /> early detection of relapse</p>
                    </div>
                    <div className='step_blocks_wrap'>
                        <div
                            className={`single_block blue ${activeStep === "blue" && "active"}`}
                            onMouseEnter={() => setActiveStep("blue")}
                        >
                            <h3 className='mb-4'>Before the<br />Treatment:</h3>
                            <ul>
                                {(activeStep === "blue" || screenWidth < 800) &&
                                    <>
                                        <li>With Smart Algorithms &amp; Artificial<br /> Intelligence - find cancer,<br /> specialist doctors, and the best<br /> hospitals at the earliest stage.</li>
                                    </>
                                }
                            </ul>
                            <img src={treatmentBeforeStep} className="step_img" />
                        </div>
                        <div
                            className={`single_block pink ${activeStep === "pink" && "active"}`}
                            onMouseEnter={() => setActiveStep("pink")}
                        >
                            <h3 className='mb-4'>During The<br />Treatment:</h3>
                            <ul>
                                {(activeStep === "pink" || screenWidth < 800) &&
                                    <>
                                        <li>Use the world's latest AI-powered technology to monitor your symptoms from anywhere &amp; get 24/7 doctor support.</li>
                                        <li>Get automated real-time help for managing your condition from the comfort of your home.</li>
                                    </>
                                }
                            </ul>
                            <img src={treatmentDuringStep} className="step_img" />
                        </div>
                        <div
                            className={`single_block green ${activeStep === "green" && "active"}`}
                            onMouseEnter={() => setActiveStep("green")}
                        >
                            <h3 className='mb-4'>After The<br />Treatment:</h3>
                            <ul>
                                {(activeStep === "green" || screenWidth < 800) &&
                                    <>
                                        <li>Track symptoms and follow up regularly with your dedicated doctor ensuring timely interventions.</li>
                                        <li>Live cancer-free high-quality life with the help of CareShare.</li>
                                    </>
                                }
                            </ul>
                            <img src={treatmentAfterStep} className="step_img" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
