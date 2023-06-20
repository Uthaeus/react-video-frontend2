import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function BlogDetail() {
    const [blog, setBlog] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:4000/blogs/${id}`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setBlog(data);
            });
    }, [id]);

    return (
        <div className="blog-detail">
            <h1>Blog Detail</h1>
            <Link to='/blogs'>Back to blogs</Link>
            <h2>{blog.title}</h2>
        </div>
    );
}

export default BlogDetail;