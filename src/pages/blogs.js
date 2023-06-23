import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../store/user-context';
import BlogSidebar from '../components/blogs/blog-sidebar';
import BlogItem from '../components/blogs/blog-item';
import FeaturedBlogItem from '../components/blogs/featured-blog-item';

function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [featuredBlog, setFeaturedBlog] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { user } = useContext(UserContext);

    useEffect(() => {
        setIsLoading(true);

        fetch('http://localhost:4000/blogs')
            .then(response => {
                return response.json();
            })
            .then(data => {
                let randomIndex = Math.floor(Math.random() * data.length);
                setBlogs(data);
                setFeaturedBlog(data[randomIndex]);
                setIsLoading(false);
            })
            .catch(error => console.log('Error fetching blogs: ', error));
    }, []);

    if (isLoading) {
        return (
            <div className="loading">
                <h1>Loading...</h1>
            </div>
        );
    }

    return (
        <div className="blogs-container">
            <div className='blogs-header'>
                <div className='blogs-header-left'>
                    <h1 className='blogs-title'>Blogs</h1>
                    <p className="blogs-subtitle">“It is hard to fail but it is worse never to have tried to succeed.” —Theodore Roosevelt</p>
                </div>

                <div className='blogs-header-right'>
                    <p className='blogs-header-right-text'>featured blog</p>
                    {featuredBlog && <FeaturedBlogItem blog={featuredBlog} />} 
                </div>
            </div>

            <div className="blogs-content">
                <div className="blogs-list">
                    {user?.role === 'site_admin' && <Link to='/blogs/new' className='new-blog-link'>New Blog</Link>}
                    
                    <hr />

                    {blogs.map(blog => (
                        <BlogItem key={blog.id} blog={blog} />
                    ))}
                </div>

                <div className="blogs-sidebar">
                    <BlogSidebar />
                </div>
            </div>

            
        </div>
    );
}

export default Blogs;