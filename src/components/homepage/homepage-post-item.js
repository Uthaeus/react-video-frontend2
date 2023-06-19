import { Link } from 'react-router-dom';

import defaultImage from '../../assets/images/space.png';

function HomepagePostItem({ post }) {
    const image = post.image ? `http://localhost:4000${post.image.url}` : defaultImage;

    return (
        <div className="homepage-post-item">
            <img className="homepage-post-item-image" src={image} alt={post.title} width='100%' />

            <div className="homepage-post-item-content">
                <Link to={`/posts/${post.id}`} className="homepage-post-item-title">{post.title}</Link>
                <p className="homepage-post-item-description">{post.description}</p>
            </div>
        </div>
    );
}

export default HomepagePostItem;