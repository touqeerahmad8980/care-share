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

    const [activeStep, setActiveStep] = React.useState('blue');
    const [showDownloadModal, setShowDownloadModal] = React.useState(false);
    const [showStartModal, setShowStartModal] = React.useState(false);
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

    const openDownloadModal = () => {
        setShowDownloadModal(true);
    }

    const closeDownloadModal = () => {
        setShowDownloadModal(false);
    }

    const openStartModal = () => {
        closeDownloadModal();
        setShowStartModal(true);
    }

    const closeStartModal = () => {
        setShowStartModal(false);
    }

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
            <section className='download_section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-6'>
                            <h2 class="mb-5">Get a free personalized cancer management guide</h2>
                            <button type="button" className='btn btn-primary download_btn' onClick={openDownloadModal}>Download now</button>
                        </div>
                        <div className='col-sm-6'>
                        </div>
                    </div>
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
                        {/* <img src={videoImg} style={{maxWidth:450,width:"100%",margin:"auto"}} /> */}
                        <video width="450"  style={{borderRadius:10}} controls>
                            <source src="/images/banner-video.mp4" type="video/mp4" />
                            Your browser does not support HTML video.
                        </video>
                    </div>
                    <div className='text-center mt-5'>
                        <a href='#' className='btn btn-primary mt-3'>Sign up For Free Consultation</a>
                    </div>
                </div>
            </section>
            {showDownloadModal &&
                <>
                    <div class="modal-backdrop fade show in"></div>
                    <div class="downloadModal modal fade show in" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg" role="document">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Get Your Treatment Guide</h5>
                                    <button type="button" class="close" onClick={closeDownloadModal} aria-label="Close">
                                    <span aria-hidden="true">x</span>
                                </button>
                            </div>
                            <div class="modal-body p-5">
                                <p className='mb-5' style={{fontSize:20, fontWeight:500}}>Please fill out the information below</p>
                                <div className='row'>
                                    <div className='col-sm-5'>
                                        <h3 className='mb-3' style={{fontSize:15}}>What is the type of cancer?*</h3>
                                        <select class="custom-select">
                                            <option value="Blood Cancer"> Blood Cancer</option>
                                            <option value="Breast Cancer"> Breast Cancer</option>
                                            <option value="Cervical Cancer"> Cervical Cancer</option>
                                            <option value="Colon Cancer"> Colon Cancer</option>
                                            <option value="Extremity Soft Tissue Sarcoma"> Extremity Soft Tissue Sarcoma</option>
                                            <option value="Gallbladder Cancer"> Gallbladder Cancer</option>
                                            <option value="Gastric Cancer"> Gastric Cancer</option>
                                            <option value="High Grade Glioma (Brain Tumor)"> High Grade Glioma (Brain Tumor)</option>
                                            <option value="Liver Cancer"> Liver Cancer</option>
                                            <option value="Low Grade Glioma (Brain Tumor)"> Low Grade Glioma (Brain Tumor)</option>
                                            <option value="Lung Cancer"> Lung Cancer</option>
                                            <option value="Oral Cavity Cancer"> Oral Cavity Cancer</option>
                                            <option value="Osteosarcoma (Bone Cancer)"> Osteosarcoma (Bone Cancer)</option>
                                            <option value="Ovarian Cancer"> Ovarian Cancer</option>
                                            <option value="Prostate Cancer"> Prostate Cancer</option>
                                            <option value="Rectum Cancer"> Rectum Cancer</option>
                                            <option value="Throat Cancer"> Throat Cancer</option>
                                            <option value="Don't Know"> Don't Know</option>
                                            <option value="Other"> Other</option>
                                        </select>
                                    </div>
                                    <div className='col-sm-5'>
                                        <h3 className='mb-3' style={{fontSize:15}}>What is the stage of cancer?*</h3>
                                        <select class="custom-select">
                                            <option selected>Select</option>
                                            <option value="Early">Early</option>
                                            <option value="Advanced">Locally Advanced</option>
                                            <option value="Metastatic">Metastatic</option>
                                            <option value="Recurrence">Recurrence</option>
                                        </select>
                                    </div>
                                    <div className='col-sm-2'></div>
                                    <div className='col-sm-12 mt-5'>
                                        <h3 className='mb-3' style={{fontSize:15}}>Select treatment(s) received so far*</h3>
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="customCheck1" />
                                            <label class="custom-control-label" for="customCheck1">Chemotherapy</label>
                                        </div>
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="customCheck1" />
                                            <label class="custom-control-label" for="customCheck1">Radiotherapy</label>
                                        </div>
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="customCheck1" />
                                            <label class="custom-control-label" for="customCheck1">Surgery</label>
                                        </div>
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="customCheck1" />
                                            <label class="custom-control-label" for="customCheck1">Immunotherapy</label>
                                        </div>
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="customCheck1" />
                                            <label class="custom-control-label" for="customCheck1">No treatment recieved</label>
                                        </div>
                                    </div>
                                </div>
                                <button className='btn btn-primary download_btn mb-5 mt-4' onClick={openStartModal}>Download Now</button>
                            </div>
                            {/* <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" onClick={closeDownloadModal}>Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div> */}
                            </div>
                        </div>
                    </div>
                </>
            }
            {showStartModal &&
                <>
                    <div class="modal-backdrop fade show in"></div>
                    <div class="downloadModal modal fade show in" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel" style={{fontSize:18}}>Tell us more to get started on your cancer treatment</h5>
                                    <button type="button" class="close" onClick={closeDownloadModal} aria-label="Close">
                                    <span aria-hidden="true">x</span>
                                </button>
                            </div>
                            <div class="modal-body p-5">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1" style={{fontWeight:"normal"}}>Name</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your name" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlInput1" style={{fontWeight:"normal"}}>Email address</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your email address" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlInput1" style={{fontWeight:"normal"}}>Phone No.</label>
                                    <div style={{display:'flex'}}>
                                        <select className='phoneSelect'>
                                            <option value="+93">Afghanistan (+93)</option>
                                            <option value="+213">Algeria (+213)</option>
                                            <option value="+376">Andorra (+376)</option>
                                            <option value="+244">Angola (+244)</option>
                                            <option value="+1264">Anguilla (+1264)</option>
                                            <option value="+1268">Antigua &amp; Barbuda (+1268)</option>
                                            <option value="+54">Argentina (+54)</option>
                                            <option value="+374">Armenia (+374)</option>
                                            <option value="+297">Aruba (+297)</option>
                                            <option value="+61">Australia (+61)</option>
                                            <option value="+43">Austria (+43)</option>
                                            <option value="+994">Azerbaijan (+994)</option>
                                            <option value="+1242">Bahamas (+1242)</option>
                                            <option value="+973">Bahrain (+973)</option>
                                            <option value="+880">Bangladesh (+880)</option>
                                            <option value="+1246">Barbados (+1246)</option>
                                            <option value="+375">Belarus (+375)</option>
                                            <option value="+32">Belgium (+32)</option>
                                            <option value="+501">Belize (+501)</option>
                                            <option value="+229">Benin (+229)</option>
                                            <option value="+1441">Bermuda (+1441)</option>
                                            <option value="+975">Bhutan (+975)</option>
                                            <option value="+591">Bolivia (+591)</option>
                                            <option value="+387">Bosnia Herzegovina (+387)</option>
                                            <option value="+267">Botswana (+267)</option>
                                            <option value="+55">Brazil (+55)</option>
                                            <option value="+673">Brunei (+673)</option>
                                            <option value="+359">Bulgaria (+359)</option>
                                            <option value="+226">Burkina Faso (+226)</option>
                                            <option value="+257">Burundi (+257)</option>
                                            <option value="+855">Cambodia (+855)</option>
                                            <option value="+237">Cameroon (+237)</option>
                                            <option value="+1">Canada (+1)</option>
                                            <option value="+238">Cape Verde Islands (+238)</option>
                                            <option value="+1345">Cayman Islands (+1345)</option>
                                            <option value="+236">Central African Republic (+236)</option>
                                            <option value="+56">Chile (+56)</option>
                                            <option value="+86">China (+86)</option>
                                            <option value="+57">Colombia (+57)</option>
                                            <option value="+269">Comoros (+269)</option>
                                            <option value="+242">Congo (+242)</option>
                                            <option value="+682">Cook Islands (+682)</option>
                                            <option value="+506">Costa Rica (+506)</option>
                                            <option value="+385">Croatia (+385)</option>
                                            <option value="+53">Cuba (+53)</option>
                                            <option value="+90392">Cyprus North (+90392)</option>
                                            <option value="+357">Cyprus South (+357)</option>
                                            <option value="+42">Czech Republic (+42)</option>
                                            <option value="+45">Denmark (+45)</option>
                                            <option value="+253">Djibouti (+253)</option>
                                            <option value="+1809">Dominica (+1809)</option>
                                            <option value="+1809">Dominican Republic (+1809)</option>
                                            <option value="+593">Ecuador (+593)</option>
                                            <option value="+20">Egypt (+20)</option>
                                            <option value="+503">El Salvador (+503)</option>
                                            <option value="+240">Equatorial Guinea (+240)</option>
                                            <option value="+291">Eritrea (+291)</option>
                                            <option value="+372">Estonia (+372)</option>
                                            <option value="+251">Ethiopia (+251)</option>
                                            <option value="+500">Falkland Islands (+500)</option>
                                            <option value="+298">Faroe Islands (+298)</option>
                                            <option value="+679">Fiji (+679)</option>
                                            <option value="+358">Finland (+358)</option>
                                            <option value="+33">France (+33)</option>
                                            <option value="+594">French Guiana (+594)</option>
                                            <option value="+689">French Polynesia (+689)</option>
                                            <option value="+241">Gabon (+241)</option>
                                            <option value="+220">Gambia (+220)</option>
                                            <option value="+7880">Georgia (+7880)</option>
                                            <option value="+49">Germany (+49)</option>
                                            <option value="+233">Ghana (+233)</option>
                                            <option value="+350">Gibraltar (+350)</option>
                                            <option value="+30">Greece (+30)</option>
                                            <option value="+299">Greenland (+299)</option>
                                            <option value="+1473">Grenada (+1473)</option>
                                            <option value="+590">Guadeloupe (+590)</option>
                                            <option value="+671">Guam (+671)</option>
                                            <option value="+502">Guatemala (+502)</option>
                                            <option value="+224">Guinea (+224)</option>
                                            <option value="+245">Guinea - Bissau (+245)</option>
                                            <option value="+592">Guyana (+592)</option>
                                            <option value="+509">Haiti (+509)</option>
                                            <option value="+504">Honduras (+504)</option>
                                            <option value="+852">Hong Kong (+852)</option>
                                            <option value="+36">Hungary (+36)</option>
                                            <option value="+354">Iceland (+354)</option>
                                            <option value="+91" selected>India (+91)</option>
                                            <option value="+62">Indonesia (+62)</option>
                                            <option value="+98">Iran (+98)</option>
                                            <option value="+964">Iraq (+964)</option>
                                            <option value="+353">Ireland (+353)</option>
                                            <option value="+972">Israel (+972)</option>
                                            <option value="+39">Italy (+39)</option>
                                            <option value="+1876">Jamaica (+1876)</option>
                                            <option value="+81">Japan (+81)</option>
                                            <option value="+962">Jordan (+962)</option>
                                            <option value="+7">Kazakhstan (+7)</option>
                                            <option value="+254">Kenya (+254)</option>
                                            <option value="+686">Kiribati (+686)</option>
                                            <option value="+850">Korea North (+850)</option>
                                            <option value="+82">Korea South (+82)</option>
                                            <option value="+965">Kuwait (+965)</option>
                                            <option value="+996">Kyrgyzstan (+996)</option>
                                            <option value="+856">Laos (+856)</option>
                                            <option value="+371">Latvia (+371)</option>
                                            <option value="+961">Lebanon (+961)</option>
                                            <option value="+266">Lesotho (+266)</option>
                                            <option value="+231">Liberia (+231)</option>
                                            <option value="+218">Libya (+218)</option>
                                            <option value="+417">Liechtenstein (+417)</option>
                                            <option value="+370">Lithuania (+370) </option>
                                            <option value="+352">Luxembourg (+352) </option>
                                            <option value="+853">Macao (+853) </option>
                                            <option value="+389">Macedonia (+389) </option>
                                            <option value="+261">Madagascar (+261) </option>
                                            <option value="+265">Malawi (+265) </option>
                                            <option value="+60">Malaysia (+60) </option>
                                            <option value="+960">Maldives (+960) </option>
                                            <option value="+223">Mali (+223) </option>
                                            <option value="+356">Malta (+356) </option>
                                            <option value="+692">Marshall Islands (+692) </option>
                                            <option value="+596">Martinique (+596) </option>
                                            <option value="+222">Mauritania (+222) </option>
                                            <option value="+230">Mauritius (+230) </option>
                                            <option value="+269">Mayotte (+269) </option>
                                            <option value="+52">Mexico (+52) </option>
                                            <option value="+691">Micronesia (+691) </option>
                                            <option value="+373">Moldova (+373) </option>
                                            <option value="+377">Monaco (+377) </option>
                                            <option value="+976">Mongolia (+976) </option>
                                            <option value="+1664">Montserrat (+1664) </option>
                                            <option value="+212">Morocco (+212) </option>
                                            <option value="+258">Mozambique (+258) </option>
                                            <option value="+95">Myanmar (+95) </option>
                                            <option value="+264">Namibia (+264) </option>
                                            <option value="+674">Nauru (+674) </option>
                                            <option value="+977">Nepal (+977) </option>
                                            <option value="+31">Netherlands (+31) </option>
                                            <option value="+687">New Caledonia (+687) </option>
                                            <option value="+64">New Zealand (+64) </option>
                                            <option value="+505">Nicaragua (+505) </option>
                                            <option value="+227">Niger (+227) </option>
                                            <option value="+234">Nigeria (+234) </option>
                                            <option value="+683">Niue (+683) </option>
                                            <option value="+672">Norfolk Islands (+672) </option>
                                            <option value="+670">Northern Marianas (+670) </option>
                                            <option value="+47">Norway (+47) </option>
                                            <option value="+968">Oman (+968) </option>
                                            <option value="+680">Palau (+680) </option>
                                            <option value="+507">Panama (+507) </option>
                                            <option value="+675">Papua New Guinea (+675) </option>
                                            <option value="+595">Paraguay (+595) </option>
                                            <option value="+51">Peru (+51) </option>
                                            <option value="+63">Philippines (+63) </option>
                                            <option value="+48">Poland (+48) </option>
                                            <option value="+351">Portugal (+351) </option>
                                            <option value="+1787">Puerto Rico (+1787) </option>
                                            <option value="+974">Qatar (+974) </option>
                                            <option value="+262">Reunion (+262) </option>
                                            <option value="+40">Romania (+40) </option>
                                            <option value="+7">Russia (+7) </option>
                                            <option value="+250">Rwanda (+250) </option>
                                            <option value="+378">San Marino (+378) </option>
                                            <option value="+239">Sao Tome &amp; Principe (+239) </option>
                                            <option value="+966">Saudi Arabia (+966) </option>
                                            <option value="+221">Senegal (+221) </option>
                                            <option value="+381">Serbia (+381) </option>
                                            <option value="+248">Seychelles (+248) </option>
                                            <option value="+232">Sierra Leone (+232) </option>
                                            <option value="+65">Singapore (+65) </option>
                                            <option value="+421">Slovak Republic (+421) </option>
                                            <option value="+386">Slovenia (+386) </option>
                                            <option value="+677">Solomon Islands (+677) </option>
                                            <option value="+252">Somalia (+252) </option>
                                            <option value="+27">South Africa (+27) </option>
                                            <option value="+34">Spain (+34) </option>
                                            <option value="+94">Sri Lanka (+94) </option>
                                            <option value="+290">St. Helena (+290) </option>
                                            <option value="+1869">St. Kitts (+1869) </option>
                                            <option value="+1758">St. Lucia (+1758) </option>
                                            <option value="+249">Sudan (+249) </option>
                                            <option value="+597">Suriname (+597) </option>
                                            <option value="+268">Swaziland (+268) </option>
                                            <option value="+46">Sweden (+46) </option>
                                            <option value="+41">Switzerland (+41) </option>
                                            <option value="+963">Syria (+963) </option>
                                            <option value="+886">Taiwan (+886) </option>
                                            <option value="+7">Tajikstan (+7) </option>
                                            <option value="+66">Thailand (+66) </option>
                                            <option value="+228">Togo (+228) </option>
                                            <option value="+676">Tonga (+676) </option>
                                            <option value="+1868">Trinidad &amp; Tobago (+1868) </option>
                                            <option value="+216">Tunisia (+216) </option>
                                            <option value="+90">Turkey (+90) </option>
                                            <option value="+7">Turkmenistan (+7) </option>
                                            <option value="+993">Turkmenistan (+993) </option>
                                            <option value="+1649">Turks &amp; Caicos Islands (+1649) </option>
                                            <option value="+688">Tuvalu (+688) </option>
                                            <option value="+256">Uganda (+256) </option>
                                            <option value="+44">UK (+44) </option>
                                            <option value="+380">Ukraine (+380) </option>
                                            <option value="+971">United Arab Emirates (+971) </option>
                                            <option value="+598">Uruguay (+598) </option>
                                            <option value="+1">USA (+1) </option>
                                            <option value="+7">Uzbekistan (+7) </option>
                                            <option value="+678">Vanuatu (+678) </option>
                                            <option value="+379">Vatican City (+379) </option>
                                            <option value="+58">Venezuela (+58) </option>
                                            <option value="+84">Vietnam (+84) </option>
                                            <option value="+1284">Virgin Islands - British (+1284) </option>
                                            <option value="+1340">Virgin Islands - US (+1340) </option>
                                            <option value="+681">Wallis &amp; Futuna (+681) </option>
                                            <option value="+969">Yemen (North)(+969) </option>
                                            <option value="+967">Yemen (South)(+967) </option>
                                            <option value="+260">Zambia (+260) </option>
                                            <option value="+263">Zimbabwe (+263) </option>
                                        </select>
                                        <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Enter phone no." />
                                    </div>
                                </div>
                                <button className='btn btn-primary download_btn mb-5 mt-4' onClick={closeStartModal}>Start Now</button>
                            </div>
                            {/* <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" onClick={closeDownloadModal}>Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div> */}
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default Home
