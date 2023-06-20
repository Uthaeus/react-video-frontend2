import { Link } from 'react-router-dom';

import defaultImage from '../../assets/images/space.png';

function BlogUserItem({ user }) {
    let imageUrl = user.avatar.url ? `http://localhost:4000${user.avatar.url}` : defaultImage;

    return (
        <Link to='/userpage' className="blog-user-item-container">
            <div className="blog-user-item-header">
                <p className='blog-user-item-username'>{user.username}</p>
            </div>

            <div className="blog-user-item-content">
                <img src={imageUrl} alt={user.username} width='100%' height='60px' />
            </div>
        </Link>
    );
}

export default BlogUserItem;