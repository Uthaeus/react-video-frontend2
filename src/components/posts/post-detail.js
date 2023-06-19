import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';

import { UserContext } from '../../store/user-context';

function PostDetail() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

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
            .catch(err => console.log('post detail error: ', err));
    }, [id]);

    function postDeleteHandler() {
        fetch('http://localhost:4000/posts/' + id, {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('practice-token')
            }
        })
        .then(res => {
            if (!res.ok) {
                throw Error('Could not delete that resource');
            }
            navigate('/posts');
            return res.json();
        })
        .catch(err => console.log('post delete error: ', err));
    }

    if (!post) {
        return <div className='loading'>Loading...</div>;
    }

    return (
        <div className="post-detail-container">
            <h1 className="post-detail-title">{post.title}</h1>
            <div className="post-detail-video">
                <video controls src={post.video_url} />
            </div>
            <div className="post-detail-description">{post.description}</div>

            <div className="post-detail-actions">
                {user.id === post.user_id && (
                    <>
                        <Link to={`/posts/${post.id}/edit`} className="post-detail-action">edit</Link>
                        <Link onClick={postDeleteHandler} className="post-detail-action">delete</Link>
                    </>
                )}
                <Link to="/posts" className="post-detail-action">back to posts</Link>
            </div>

            <div className='post-detail-comments'>
                <h2>Comments</h2>
                {user && <h3>Add a comment {user.username}</h3>}
            </div>
        </div>
    );
}

export default PostDetail;