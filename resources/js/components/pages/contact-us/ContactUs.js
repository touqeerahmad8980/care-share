import React from 'react'
import './ContactUs.css';

const ContactUs = () => {

    return (
        <div className='blog_listing_page'>
            <section className='banner'>
                <div className="container text-center">
                    <h1 className='banner_heading'>CONTACT US</h1>
                </div>
            </section>
           <section className='listing_section'>
               <div className='container'>
                   <div className='row'>
                       <div className='col-sm-6'>
                           <div className='form-group'>
                               {/* <label>Name</label> */}
                                <input className='form-control' type="text" placeholder='Enter Name' />
                           </div>
                           <div className='form-group'>
                               {/* <label>Email</label> */}
                                <input className='form-control' type="text" placeholder='Enter Your Email' />
                           </div>
                           <div className='form-group'>
                               {/* <label>Phone</label> */}
                                <input className='form-control' type="text" placeholder='Enter Phone Number' />
                           </div>
                           <div className='form-group'>
                               {/* <label>Message</label> */}
                                <textarea rows={5} className='form-control' type="text" placeholder='Enter Message here...' />
                           </div>
                           <div className='form-group'>
                                <button type="submit" className='btn btn-primary'>
                                    <i className='fa fa-paper-plane-o'></i> Send
                                </button>
                           </div>
                       </div>
                       <div className='col-sm-6'>
                           <img className='contact-us-image' src={'../assets/images/contact-us-image.jpg'} />
                       </div>
                   </div>
               </div>
           </section>
        </div>
    )
}

export default ContactUs;
