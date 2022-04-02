import React from 'react'
import caresharePlusInline from '../../../assets/images/careshare-plus-inline.png';
import videoImg from '../../../assets/images/video-img.png';
import Banner from '../../../assets/banners/banner-1.jpg';
import avatar1 from '../../../assets/images/avatar-1.jpg';
import checkIcon from '../../../assets/images/check-icon.png';
import whatsappIcon from '../../../assets/images/whatsapp-icon.png';
import commaIcon from '../../../assets/images/comma-icon.png';
import apolloHospital from '../../../assets/images/hospital-logos/Apollo Hospitals.jpg';
import asianCancer from '../../../assets/images/hospital-logos/Asian Cancer Institute.jpg';
import CHLHospital from '../../../assets/images/hospital-logos/CHL Hospitals, Indore.jpg';
import fortiseBangalore from '../../../assets/images/hospital-logos/Fortis Bangalore.jpg';
import HCGBangalore from '../../../assets/images/hospital-logos/Jupiter Hospital, Pune.jpg';
import kanachurHospital from '../../../assets/images/hospital-logos/Kanachur  Institute of Medical Sciences logo.jpg';
import manipalHospital from '../../../assets/images/hospital-logos/Manipal Hospitals.png';
import mazumdarHospital from '../../../assets/images/hospital-logos/Mazumdar-Shaw Cancer Center, Bangalore.jpg';
import medantaHospital from '../../../assets/images/hospital-logos/Medanta.png';
import relianceHospital from '../../../assets/images/hospital-logos/Reliance Foundation Hospital, Mumbai.jpg';
import valentisHospital from '../../../assets/images/hospital-logos/Valentis Cancer Hospital, Meerut.png';
import Slider from "react-slick";
import PerfectScrollbar from 'react-perfect-scrollbar'
import './Home.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-perfect-scrollbar/dist/css/styles.css';



const doctorsData = {
    1: {name: "Suchitra R", speciality: "Gynae-Oncologist", experience: "10"},
    2: {name: "Shubha Sinha", speciality: "Breast Surgical Oncology", experience: "9"},
    3: {name: "Dr Karan Sehgal", speciality: "Surgical Oncologist", experience: "4"},
    4: {name: "Sandeep Nayak", speciality: "Surgical Oncologist", experience: "20"},
    5: {name: "Amit Jain", speciality: "Clinical Oncologist", experience: "15"},
    6: {name: "Guruprasad Bhat", speciality: "Medical Oncologist", experience: "15"},
    7: {name: "Ranjith Kumar C S", speciality: "Medical Oncologist", experience: "6"},
    8: {name: "Govind Babu", speciality: "Medical Oncologist", experience: "31"},
    9: {name: "Akash Umesh Tiwari", speciality: "Surgical Oncologist", experience: "9"},
    10: {name: "Jatin Bhatia", speciality: "Radiation Oncologist", experience: "5"},
    11: {name: "Piyush Kedia", speciality: "Surgical Oncologist", experience: "9"},
    12: {name: "Mohan Menon", speciality: "Medical Oncologist", experience: "24"},
    13: {name: "Amish Dalal", speciality: "Surgical & Gyancologic Oncologist", experience: "30"},
    14: {name: "Namrata Singh", speciality: "Surgical Oncologist", experience: "12"},
    15: {name: "Mohammad Akheel", speciality: "Head & Neck Oncosurgeon", experience: "8"},
    16: {name: "Priyanka Verma", speciality: "Hematology & Pediatric Oncologist", experience: "7"},
    17: {name: "Prasenjit Chatterjee", speciality: "Radiation Oncologist", experience: "21"},
    18: {name: "Sachin Kadam", speciality: "Consultant Oncosurgeon", experience: "12"},
    19: {name: "Nilesh Chordiya", speciality: "Surgical Oncologist", experience: "13"},
    20: {name: "Dr. Poovamma   C.U.", speciality: "Gynae-Oncologist", experience: "12"},
    21: {name: "Raghavendra Babu", speciality: "GI & HPB Surgical Oncologist", experience: "11"},
    22: {name: "P Venkata Krishna Reddy", speciality: "Radiation Oncologist", experience: "6"}
}


const Home = () => {

    const [activeStep, setActiveStep] = React.useState('blue')
    const { innerWidth: screenWidth } = window;
    const doctorSliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        dotsClass: "slick-dots slick-custom-dots",
        responsive: [
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
          ]
    };
    const hospitalSliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        dotsClass: "slick-dots slick-custom-dots",
        responsive: [
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    return (
        <div>
            <section className='home-banner' style={{background:`url(${Banner}) no-repeat`}}>
                <div className="banner">
                    <div className="container">
                        <div className='row'>
                            <div className='col-md-12'>
                                <h1>Diagnose, treat and manage cancer without any delay</h1>
                                <p>Cancer is a silent killer! But you can defeat it with timely interventions.</p>
                                <button href='#' className='btn btn-primary button'>Sign up For Free Consultation</button>
                                <span>or</span>
                                <img src={whatsappIcon} width="45" />
                            </div>
                            {/* <div className='col-md-6'>
                                <h2>24*7 PERSONALIZED</h2>
                                <h1>CANCER CARE</h1>
                                <h2 className="mt-0">JUST AT A CLICK</h2>
                                <p>From diangnosis to treatment to recovery <br />and beyond-guiding you at each step.</p>
                                <button href='#' className='btn btn-primary button'>Sign up For Free Consultation</button>
                                <span>or</span>
                                <img src={whatsappIcon} width="45" />
                            </div>
                            <div className='col-md-6'>
                                <img src={careshareBannerImage} className='image' />
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className='choose_careshare_section'>
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
            </section> */}
            <section className='choose_careshare_section'>
                <div className='container'>
                    <div className='row_wrap mb-5 text-center'>
                        <h2 className='section_heading mb-2'>Why You Should Choose CareShare?</h2>
                        <p className='section_desc'>We make every moment matters- helping you from early diagnosis of cancer to<br /> early detection of relapse</p>
                    </div>
                    <div className='row mt-5 pt-5'>
                        <div className='col-sm-4'>
                            <div className='mobileWraper'>
                                <div className='mobileWraper-overlay'></div>
                                <PerfectScrollbar style={{maxHeight:490}}>
                                    {activeStep === "blue" &&
                                        <img src="/images/After treatment.png" className="step_img" />
                                    }
                                    {activeStep === "pink" &&
                                        <img src="/images/Before treatment.png" className="step_img" />
                                    }
                                    {activeStep === "green" &&
                                        <img src="/images/During treatment.png" className="step_img" />
                                    }
                                </PerfectScrollbar>
                            </div>
                        </div>
                        <div className='col-sm-8 step_blocks_wrap'>
                            <div
                                className={`single_block ${activeStep === "blue" && "active"}`}
                                onMouseEnter={() => setActiveStep("blue")}
                            >
                                <h3 className='mb-4'>Before the Treatment:</h3>
                                <ul>
                                    <li>With Smart Algorithms &amp; Artificial  Intelligence - find cancer,  specialist doctors, and the best  hospitals at the earliest stage.</li>
                                </ul>
                                {/* <img src={treatmentBeforeStep} className="step_img" /> */}
                            </div>
                            <div
                                className={`single_block ${activeStep === "pink" && "active"}`}
                                onMouseEnter={() => setActiveStep("pink")}
                            >
                                <h3 className='mb-4'>During The Treatment:</h3>
                                <ul>
                                    <li>Use the world's latest AI-powered technology to monitor your symptoms from anywhere &amp; get 24/7 doctor support.</li>
                                    <li>Get automated real-time help for managing your condition from the comfort of your home.</li>
                                </ul>
                                {/* <img src={treatmentDuringStep} className="step_img" /> */}
                            </div>
                            <div
                                className={`single_block ${activeStep === "green" && "active"}`}
                                onMouseEnter={() => setActiveStep("green")}
                            >
                                <h3 className='mb-4'>After The Treatment:</h3>
                                <ul>
                                    <li>Track symptoms and follow up regularly with your dedicated doctor ensuring timely interventions.</li>
                                    <li>Live cancer-free high-quality life with the help of CareShare.</li>
                                </ul>
                                {/* <img src={treatmentAfterStep} className="step_img" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section_grey hospital_section'>
                <div className='container'>
                    <div className='row_wrap mb-5 text-center'>
                        <h2 className='section_heading mb-2'>Know Our Senior Oncologists</h2>
                        <p className='section_desc'>Our doctors have a rich 10+ years of experience and are trained at the top cancer institutes<br /> such as Tata Memorial, AIIMS, and Memorial Sloan Kettering (US)</p>
                    </div>
                    <div>
                        <Slider {...doctorSliderSettings}>
                            {Array(22).fill('').map((val, index) => (
                                <div className='logoWraper'>
                                    <div className='imageWrap'>
                                        <img src={`/images/doctors/${index+1}.jpg`} />
                                    </div>
                                    <div style={{padding:15}}>
                                        <h3 className='doctorName'>{doctorsData[index+1].name}</h3>
                                        <p className='doctorDesc'>{doctorsData[index+1].speciality}</p>
                                        <p className='doctorDesc'>Exp: {doctorsData[index+1].experience} Yrs</p>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
            <section className='hospital_section'>
                <div className='container'>
                    <div className='row_wrap mb-5 text-center'>
                        <h2 className='section_heading mb-2'>Know Our Hospitals</h2>
                        <p className='section_desc'>Our doctors have a rich 10+ years of experience and are trained at the top cancer institutes<br /> such as Tata Memorial, AIIMS, and Memorial Sloan Kettering (US)</p>
                    </div>
                    <div>
                        <Slider {...hospitalSliderSettings}>
                            {[
                                apolloHospital,
                                asianCancer,
                                CHLHospital,
                                fortiseBangalore,
                                HCGBangalore,
                                kanachurHospital,
                                manipalHospital,
                                mazumdarHospital,
                                medantaHospital,
                                relianceHospital,
                                valentisHospital
                            ].map((path) => (
                                <div className='hospitalLogo'>
                                    <img src={path} style={{maxWidth:240,maxHeight:140,margin:"auto"}} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
            <section className='section_grey package_section'>
                <div className='container'>
                    <div className='row_wrap mb-5 text-center'>
                        <h2 className='section_heading mb-4'>Begin Your Journey To Cancer Free Life Today!</h2>
                        <p className='section_desc'>Join <img className='inline-logo' src={caresharePlusInline} /> as early user and get unlimited benefits at just 1/10th of the cost: <br />Better outcomes of your treatment with</p>
                    </div>
                    <div className='packages_wrap'>
                        <div className='single_package'>
                            <h4 className='title'>One Month</h4>
                            <h3 className="price">Rs. 2499</h3>
                            <p className='price_cut'>Rs. 24,999</p>
                            <a className='btn btn-primary'>Pay Now</a>
                        </div>
                        <div className='single_package'>
                            <h4 className='title'>Three Months</h4>
                            <h3 className="price">Rs. 6999</h3>
                            <p className='price_cut'>Rs. 69,999</p>
                            <a className='btn btn-primary'>Pay Now</a>
                        </div>
                        <div className='single_package'>
                            <h4 className='title'>Six Months</h4>
                            <h3 className="price">Rs. 10,999</h3>
                            <p className='price_cut'>Rs. 109,999</p>
                            <a className='btn btn-primary'>Pay Now</a>
                        </div>
                        <div className='single_package'>
                            <h4 className='title'>Limetime</h4>
                            <h3 className="price">Rs. 20,999</h3>
                            <p className='price_cut'>Rs. 209,999</p>
                            <a className='btn btn-primary'>Pay Now</a>
                        </div>
                    </div>
                    <ul className='feature_list'>
                        <li><img src='/images/package-features/trainer.png' /> Regular Health Tracking</li>
                        <li><img src='/images/package-features/monitoring.png' /> 24*7 Real-Time Symptom Management</li>
                        <li><img src='/images/package-features/diet.png' /> Personalized Onco-Nutritional Plan With Unlimited Access To Nutritionist</li>
                        <li><img src='/images/package-features/search.png' /> Tailor Made Naturopathy, Yoga And Mental Health Sessions For You And Caregivers</li>
                        <li><img src='/images/package-features/oncologist.png' /> Real Time Unlimited Access To Dedicated Doctor</li>
                        <li><img src='/images/package-features/vomit.png' /> Medication And Test Reminders With Family In Loop</li>
                    </ul>
                </div>
            </section>
            {/* <div className='container'>
                <div className='hr_line'></div>
            </div> */}
            <section className='warriors_section'>
                <div className='container'>
                    <div className='row_wrap text-center'>
                        <h2 className='section_heading mb-2'>This is what our warriors have to say!</h2>
                    </div>
                    <div className='warrior_wrap'>
                        <div className='single_warrior'>
                            <img className='comma_icon' src={commaIcon} />
                            <h3>No Waiting Time</h3>
                            <p>"Whenever my father has any symptoms, I'll just put that in the CareShare app and I will immediately get management instructions. It even automatically gets the consultation done when needed. It has made our lives much simpler. I highly...”</p>
                            <div className='user_wrap'>
                                <img src={avatar1} />
                                <h4>- Mandeep Kaur</h4>
                            </div>
                        </div>
                        <div className='single_warrior'>
                            <img className='comma_icon' src={commaIcon} />
                            <h3>24/7 Remote Monitoring</h3>
                            <p>"It was late at night around 2 am during lockdown when my mother ( breast cancer patient), had stomach pain and vomiting. We were too afraid to go to the hospital due to covid. We just put the symptoms in the app and within 2 minutes, we got...”</p>
                            <div className='user_wrap'>
                                <img src={avatar1} />
                                <h4>- Punit Sharma</h4>
                            </div>
                        </div>
                        <div className='single_warrior'>
                            <img className='comma_icon' src={commaIcon} />
                            <h3>Empowers the Whole Family</h3>
                            <p>"When my brother was diagnosed with gastric cancer in 2017 and I was in the US, I used to call him every day and keep a record of his symptoms in a diary. In March 2021, I came to visit him due to his relapse, I came across CareShare through our oncologist in KIMS. When ...”</p>
                            <div className='user_wrap'>
                                <img src={avatar1} />
                                <h4>- Kishan Reddy</h4>
                            </div>
                        </div>
                    </div>
                    <a className='help_link' href='javascript:void(0)'>WE WANT TO HELP YOU TOO - GET IN TOUCH NOW!</a>
                </div>
            </section>
            <section className='section_grey video_section'>
                <div className='container'>
                    <div className='row_wrap mb-5 text-center'>
                        <h2 className='section_heading mb-4'>You Are A Warrior, We Have Well-trained Soldiers.<br /> Let's Battle Out Cancer Together!</h2>
                    </div>
                    <div className='text-center'>
                        <img src={videoImg} style={{maxWidth:450,width:"100%",margin:"auto"}} />
                    </div>
                    <div className='text-center mt-5'>
                        <a href='#' className='btn btn-primary mt-3'>Sign up For Free Consultation</a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
