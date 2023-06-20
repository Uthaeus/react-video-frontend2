import { Link } from "react-router-dom";

import PostForm from "./post-form";

function NewPost() {
    return (
        <div className="posts-container">
            <h1 className="posts-title">New Post</h1>

            <PostForm />

            <div className="posts-actions">
                <Link to="/" className="posts-action">back to posts</Link>
            </div>
        </div>
    );
}

export default NewPost;