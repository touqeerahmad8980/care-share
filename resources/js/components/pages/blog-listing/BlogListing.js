import React from 'react'
import { NavLink } from 'react-router-dom';
import blogImage from '../../../assets/images/blog-image.jpg';
import './BlogListing.css';

const BlogListing = () => {

    return (
        <div className='blog_listing_page'>
            <section className='banner'>
                <div className="container text-center">
                    <h1 className='banner_heading'>BLOGS</h1>
                </div>
            </section>
           <section className='listing_section'>
               <div className='container'>
                   <div className='listing_wrap row'>
                       {Array(15).fill("").map(() => (
                        <div className='col-sm-4'>
                            <div className='single_blog'>
                                    <NavLink to='/blog/1'><img className='blog_img' src={blogImage} /></NavLink>
                                    <NavLink to='/blog/1'><h3>Are Clinical Trials The Right Option For You ?</h3></NavLink>
                                    <p className='date'>December 17, 2021</p>
                                    <p className='desc'>Clinical trials are research investigations used to determine the safety and efficacy of new tests or treatments. These cancer clinical trials help study the new cancer medications, procedures, and...<NavLink to='/blog/1'>Read More</NavLink></p>
                            </div>
                        </div>
                       ))}
                   </div>
                   <div className='hr_line mb-4'></div>
                   <ul class="pagination">
                        <li class="page-item"><a class="page-link" href="#"><i className='fa fa-arrow-left'></i></a></li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#"><i className='fa fa-arrow-right'></i></a></li>
                    </ul>
               </div>
           </section>
        </div>
    )
}

export default BlogListing;
