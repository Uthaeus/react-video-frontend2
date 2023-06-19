import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import PostForm from "./post-form";

function EditPost() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch('http://localhost:4000/posts/' + id)
        .then(res => {
            if (!res.ok) {
                throw Error('Could not fetch data for that resource');
            }
            return res.json();
        })
        .then(data => {
            setPost(data);
        })
        .catch(err => console.log('edit post error: ', err));
    }, [id]);

  return (
    <div className="posts-container">
      <h1 className="posts-title">Edit Post</h1>
        <PostForm post={post} />

        <div className="posts-actions">
            <Link to="/posts" className="posts-action">back to posts</Link>
        </div>
    </div>
  );
}

export default EditPost;