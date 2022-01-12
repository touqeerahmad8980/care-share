import React from 'react'
import { NavLink } from 'react-router-dom';
import blogImage from '../../../assets/images/blog-image.jpg';
import './BlogDetail.css';

const BlogDetail = () => {

    return (
        <div className='blog_detail_page'>
            <section className='banner'>
                <div className="container text-center">
                    <h1 className='banner_heading'>Are Clinical Trials The Right Option For You ?</h1>
                </div>
            </section>
           <section className='detail_section'>
               <div className='container'>
                    <h2 className='heading'>Are Clinical Trials The Right Option For You ?</h2>
                    <p className='date'>December 17, 2021</p>
                    <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    <div className='categories_listing row'>
                        {Array(15).fill("").map(() => (
                            <div className='col-sm-4'>
                                <div className='single_category'>
                                    <NavLink to="/blog/1/1"><h3>Diagnosis of pancreatic cancer</h3></NavLink>
                                    <p>Doctors employ a variety of physical tests to diagnose pancreatic cancer and other related disorders. They look at the eyes, the skin, and the... <NavLink to="/blog/1/1">Read More</NavLink></p>
                                </div>
                            </div>
                        ))}

                    </div>
               </div>
           </section>
        </div>
    )
}

export default BlogDetail;
