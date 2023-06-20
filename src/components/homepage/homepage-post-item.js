import { Link } from 'react-router-dom';

import defaultImage from '../../assets/images/space.png';

function HomepagePostItem({ post }) {
    const image = post.image ? `http://localhost:4000${post.image.url}` : defaultImage;

    function truncate(str) {
        return str.length > 100 ? str.substring(0, 100) + '...' : str;
    }

    return (
        <div className="homepage-post-item">
            <div className="homepage-post-item-image" style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '40%',
            }} />

            <div className="homepage-post-item-content">
                <Link to={`/posts/${post.id}`} className="homepage-post-item-title">{post.title}</Link>
                <p className="homepage-post-item-author">by {post.user?.username}</p>


                <p className='homepage-post-item-description'>{truncate(post.description)}</p>
            </div>
        </div>
    );
}

export default HomepagePostItem;