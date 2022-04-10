import React from 'react'
import caresharePlusInline from '../../../assets/images/careshare-plus-inline.png';
import videoImg from '../../../assets/images/video-img.png';
import Banner from '../../../assets/banners/banner-1.jpg';
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
                        <p className='section_desc'>CareShare provides you end-to-end clinically proven cancer care guidance  24*7 throughout your journey</p>
                    </div>
                    <div className='row mt-5 pt-5'>
                        <div className='col-sm-4'>
                            <div className='mobileWraper'>
                                <div className='mobileWraper-overlay'></div>
                                <PerfectScrollbar style={{maxHeight:490}}>
                                    {activeStep === "blue" &&
                                        <img src="/images/Before treatment.png" className="step_img" />
                                    }
                                    {activeStep === "pink" &&
                                        <img src="/images/During treatment.png" className="step_img" />
                                    }
                                    {activeStep === "green" &&
                                    <img src="/images/After treatment.png" className="step_img" />
                                    }
                                </PerfectScrollbar>
                            </div>
                        </div>
                        <div className='col-sm-8 step_blocks_wrap'>
                            <div
                                className={`single_block ${activeStep === "blue" && "active"}`}
                                onMouseEnter={() => setActiveStep("blue")}
                            >
                                <h3 className='mb-4'>Before the treatment:</h3>
                                <ul>
                                    <li>Understand your test reports and cancer diagnosis</li>
                                    <li>Get expert opinion from a panel of world-class oncologists</li>
                                    <li>Confidently chose the most suited treatment plan</li>
                                </ul>
                                {/* <img src={treatmentBeforeStep} className="step_img" /> */}
                            </div>
                            <div
                                className={`single_block ${activeStep === "pink" && "active"}`}
                                onMouseEnter={() => setActiveStep("pink")}
                            >
                                <h3 className='mb-4'>During the treatment:</h3>
                                <ul>
                                    <li>Manage the side effects instantly through remote monitoring</li>
                                    <li>Get a dedicated coach to help you navigate the treatment</li>
                                    <li>Get holistic care including nutrition, yoga, and naturopathy</li>
                                </ul>
                                {/* <img src={treatmentDuringStep} className="step_img" /> */}
                            </div>
                            <div
                                className={`single_block ${activeStep === "green" && "active"}`}
                                onMouseEnter={() => setActiveStep("green")}
                            >
                                <h3 className='mb-4'>After the treatment:</h3>
                                <ul>
                                    <li>Proactively track your health for any concerning signs</li>
                                    <li>Regular screenings for timely interventions</li>
                                    <li>Improved healthy lifestyle with a natural approach</li>
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
                        <p className='section_desc'>Get expert opinion from experienced doctors coming from top hospitals like AIIMS, TMC,<br/> Medanta, Apollo, Manipal to name a few</p>
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
                    {/* <div className='row_wrap mb-5 text-center'>
                        <h2 className='section_heading mb-2'>Know Our Hospitals</h2>
                        <p className='section_desc'>Our doctors have a rich 10+ years of experience and are trained at the top cancer institutes<br /> such as Tata Memorial, AIIMS, and Memorial Sloan Kettering (US)</p>
                    </div> */}
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
                        <p className='section_desc'>Join <img className='inline-logo' src={caresharePlusInline} /> as early user and get unlimited benefits</p>
                    </div>
                    <div style={{display:"flex",justifyContent:'center'}}>
                        <div className='packages_wrap'>
                            {/* <div className='single_package'>
                                <h4 className='title'>One Month</h4>
                                <h3 className="price">Rs. 2499</h3>
                                <p className='price_cut'>Rs. 24,999</p>
                                <a className='btn btn-primary'>Pay Now</a>
                            </div> */}
                            <div className='single_package'>
                                <h4 className='title'>Three Months</h4>
                                <h3 className="price">Rs. 6999</h3>
                                <p className='price_cut'>Rs. 24,999</p>
                                <a className='btn btn-primary'>Pay Now</a>
                            </div>
                            <div className='single_package'>
                                <h4 className='title'>Six Months</h4>
                                <h3 className="price">Rs. 10,999</h3>
                                <p className='price_cut'>Rs. 49,999</p>
                                <a className='btn btn-primary'>Pay Now</a>
                            </div>
                            <div className='single_package'>
                                <h4 className='title'>Twelve Months</h4>
                                <h3 className="price">Rs. 15,999</h3>
                                <p className='price_cut'>Rs. 99,999</p>
                                <a className='btn btn-primary'>Pay Now</a>
                            </div>
                        </div>
                    </div>
                    <ul className='feature_list'>
                        <li><img src='/images/package-features/trainer.png' /> Dedicated coach to help you navigate the journey </li>
                        <li><img src='/images/package-features/oncologist.png' /> Unlimited access to CareShare’s internal oncologists</li>
                        <li><img src='/images/package-features/search.png' /> Unlimited support to understand test results</li>
                        <li><img src='/images/package-features/monitoring.png' /> 24*7 real time remote monitoring</li>
                        <li><img src='/images/package-features/vomit.png' /> Instant symptom management</li>
                        <li><img src='/images/package-features/diet.png' /> Personalised nutrition, yoga and mental health support</li>
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
                            <p>"Whenever my father has any symptoms, I'll just put that in the CareShare app and I will immediately get management instructions. It even automatically gets the consultation done when needed. It has made our lives much simpler.”</p>
                            <div className='user_wrap'>
                                <img src="/images/mandeep.png" />
                                <h4>- Mandeep Kaur</h4>
                            </div>
                        </div>
                        <div className='single_warrior'>
                            <img className='comma_icon' src={commaIcon} />
                            <h3>24/7 Remote Monitoring</h3>
                            <p>"It was late at night around 2 am during lockdown when my mother had stomach pain and vomiting. We just put the symptoms in the app and within 2 minutes, we got in touch with Dr. Paavas who immediately helped us.”</p>
                            <div className='user_wrap'>
                                <img src="/images/puneet.png" />
                                <h4>- Puneet Sharma</h4>
                            </div>
                        </div>
                        <div className='single_warrior'>
                            <img className='comma_icon' src={commaIcon} />
                            <h3>Empowers the Whole Family</h3>
                            <p>"We came across CareShare through a senior oncologist when my brother got diagnosed with cancer. When we started using it, I wished it existed before. It automatically provides personalized feedback and alerts the doctor if needed”</p>
                            <div className='user_wrap'>
                                <img src="/images/kishan.png" />
                                <h4>- Kishan Singh</h4>
                            </div>
                        </div>
                    </div>
                    <a className='help_link' href='javascript:void(0)'>WE WANT TO HELP YOU TOO - GET IN TOUCH NOW!</a>
                </div>
            </section>
            <section className='section_grey video_section'>
                <div className='container'>
                    <div className='row_wrap mb-5 text-center'>
                        <h2 className='section_heading mb-4'>You are a warrior, we have well-trained soldiers.<br /> Let's battle out cancer together!</h2>
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
