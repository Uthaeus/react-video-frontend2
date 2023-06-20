
function BlogItem({ blog }) {

    return (
        <div className="blog-item">
            <h2 className="blog-item-title">{blog.title}</h2>
        </div>
    );
}

export default BlogItem;