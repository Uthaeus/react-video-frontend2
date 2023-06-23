import { Link } from "react-router-dom";

function FeaturedBlogItem({ blog }) {
    function truncate(str) {
        str = str.length >= 35 ? str.substring(0, 35) : str;
        return str + '...';
    }

    return (
        <Link to={`/blogs/${blog.id}`} className="featured-blog-item">
            <h3 className="featured-blog-item-title">{blog.title}</h3>
            <p className="featured-blog-item-body">{truncate(blog.body)}</p>
        </Link>
    );
}

export default FeaturedBlogItem;