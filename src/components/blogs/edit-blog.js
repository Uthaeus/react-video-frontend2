import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import BlogForm from "./blog-form";

function EditBlog() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

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
        <div>
            <h1>Edit Blog</h1>
            <Link to={`/blogs/${id}`}>Back to blog</Link>
            <Link to='/blogs'>Back to blogs</Link>
            <hr />

            <BlogForm blog={blog} />
        </div>
    );
}

export default EditBlog;