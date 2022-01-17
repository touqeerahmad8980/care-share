import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import blogImage from '../../../assets/images/blog-image.jpg';
import './BlogDetailCategory.css';

const BlogDetailCategory = (props) => {

    const [post, setPost] = useState([]);
    const [categories, setCategories] = useState();

    useEffect(() => {
        fetchPost();
    },[])


    const fetchPost = () => {
        let blogId = props.history.location.pathname.split("/").pop();
        let catId = props.history.location.pathname.split("/")[2];
        axios.get('/api/blog/detail/'+blogId, {
            // params: {
            //     category: this.props.category, limit: this.props.limit
            // }
        })
            .then(response => {
                setPost(response.data.result.detail)
                setCategories(response.data.result.categories.find(val => val.id == catId));
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div className='blog_detail_category_page'>
            {categories &&
                <section className='detail_section'>
                    <div className='container'>
                        <h2 className='heading'>{categories.title}</h2>
                        <p className='date'>{categories.created_at}</p>
                        <p className='desc'>{categories.description}</p>
                        <div dangerouslySetInnerHTML={{__html: categories.content}} />
                        {/* <img src={blogImage} />
                        <h3>Other common symptoms:</h3>
                        <ul>
                            <li>Loss of appetite</li>
                            <li>Weight loss</li>
                            <li>Itchy skin</li>
                            <li>Fever</li>
                            <li>Dark urine</li>
                            <li>Greasy or light-colored stools</li>
                        </ul>

                        <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p> */}
                    </div>
                </section>
            }
        </div>
    )
}

export default BlogDetailCategory;
