import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import blogImage from '../../../assets/images/blog-image.jpg';
import './BlogDetail.css';

const BlogDetail = (props) => {

    const [post, setPost] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchPost();
    },[])


    const fetchPost = () => {
        let blogId = props.history.location.pathname.split("/").pop()
        axios.get('/api/blog/detail/'+blogId, {
            // params: {
            //     category: this.props.category, limit: this.props.limit
            // }
        })
            .then(response => {
                setPost(response.data.result.detail)
                setCategories(response.data.result.categories)
            })
            .catch(error => {
                console.log(error);
            });
    }


    return (
        <div className='blog_detail_page'>
            {post &&
                <>
                <section className='banner'>
                    <div className="container text-center">
                        <h1 className='banner_heading'>{post.title}</h1>
                    </div>
                </section>
                <section className='detail_section'>
                    <div className='container'>
                            <h2 className='heading'>{post.title}</h2>
                            <p className='date'>{post.created_at}</p>
                            <p className='desc'>{post.description}</p>
                            <div className='categories_listing row'>
                                {categories.length>0 && categories.map((cat) => (
                                    <div className='col-sm-4'>
                                        <div className='single_category'>
                                            <NavLink to={`/blog/${cat.id}/${post.id}`}><h3>{cat.title}</h3></NavLink>
                                            <p>{cat.description} <NavLink to={`/blog/${cat.id}/${post.id}`}>Read More</NavLink></p>
                                        </div>
                                    </div>
                                ))}

                            </div>
                    </div>
                </section>
                </>
            }
        </div>
    )
}

export default BlogDetail;
