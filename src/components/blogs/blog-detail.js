import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";

import { UserContext } from "../../store/user-context";

function BlogDetail() {
    const [blog, setBlog] = useState(null);
    const { id } = useParams();
    const { user } = useContext(UserContext);

    useEffect(() => {
        fetch(`http://localhost:4000/blogs/${id}`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setBlog(data);
            });
    }, [id]);

    if (!blog) {
        return (
            <div className="loading">
                <h1>Loading...</h1>
            </div>
        );
    }

    return (
        <div className="blog-detail">
            <div className="blog-detail-wrapper">
                <div className="blog-detail-content">
                    <h2 className="blog-detail-title">{blog.title}</h2>

                    <div className="blog-detail-widgets">
                        <div className="widgets-left">
                            <p className="widget-item">{`blogs/${blog.id}`}</p> /
                            <Link to='/blogs' className="widget-item back-link">Back to blogs</Link> /

                            <p className="widget-item">Category</p>
                        </div>

                        {user?.role === 'site_admin' && (
                            <div className="widgets-right">
                                <Link to={`/blogs/${blog.id}/edit`} className="widget-item edit-link">
                                    <i className="bi bi-pencil-square"></i>    
                                </Link> 

                                <Link className="widget-item delete-link">
                                    <i className="bi bi-trash3"></i>
                                </Link>
                            </div>
                        )}
                    </div>

                    <div className="blog-detail-body-wrapper">
                        <p className="blog-detail-body">{blog.body}</p>
                    </div>
                </div>

                <div className="blog-detail-right-column">
                    <img className="blog-detail-image" src={`http://localhost:4000${blog.image.url}`} alt={blog.title} width='90%' />

                    <div className="blog-detail-comments">
                        <h3 className="blog-detail-comments-title">Comments</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogDetail;