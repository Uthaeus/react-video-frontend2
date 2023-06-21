import { Link } from 'react-router-dom';

function BlogItem({ blog }) {

    function truncate(str) {
        str = str.length >= 90 ? str.substring(0, 90) : str;
        return str + '...';
    }

    return (
        <div className="blog-item">
            <Link to={`/blogs/${blog.id}`} className="blog-item-title">{blog.title}</Link>
            <p className='blog-item-body'>{truncate(blog.body)}</p>
        </div>
    );
}

export default BlogItem;