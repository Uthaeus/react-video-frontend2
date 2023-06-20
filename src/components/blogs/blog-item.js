
function BlogItem({ blog }) {

    return (
        <div className="blog-item">
            <h2>{blog.title}</h2>
        </div>
    );
}

export default BlogItem;