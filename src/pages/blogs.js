import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../store/user-context';
import BlogSidebar from '../components/blogs/blog-sidebar';

function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { user } = useContext(UserContext);

    // useEffect(() => {
    //     setIsLoading(true);

    //     fetch('http://localhost:4000/blogs')
    //         .then(response => {
    //             return response.json();
    //         })
    //         .then(data => {
    //             setBlogs(data);
    //             setIsLoading(false);
    //         });
    // }, []);

    // if (isLoading) {
    //     return (
    //         <div className="loading">
    //             <h1>Loading...</h1>
    //         </div>
    //     );
    // }

    return (
        <div className="blogs-container">
            <div className='blogs-header'>
                <h1>Blogs</h1>
            </div>

            <div className="blogs-content">
                <div className="blogs-list">
                    blogs list
                </div>

                <div className="blogs-sidebar">
                    <BlogSidebar />
                </div>
            </div>

            <div className="blogs-footer">
                <h1>Footer</h1>
            </div>
        </div>
    );
}

export default Blogs;