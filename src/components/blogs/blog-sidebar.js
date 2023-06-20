
function BlogSidebar() {

    return (
        <div className="blog-sidebar">
            <h3 className="blog-sidebar-title">Categories</h3>

            <div className="blog-sidebar-categories">
                <p className="blog-sidebar-category">javascript</p>
                <p className="blog-sidebar-category">react</p>
                <p className="blog-sidebar-category">ruby</p>
                <p className="blog-sidebar-category">postgresql</p>
            </div>

            <h3 className="blog-sidebar-title">Socials</h3>

            <div className="blog-sidebar-socials">
                <a className="blog-sidebar-social" href='www.example.com'>github</a>
                <a className="blog-sidebar-social" href='www.example.com'>linkedin</a>
                <a className="blog-sidebar-social" href='www.example.com'>facebook</a>
                <a className="blog-sidebar-social" href='www.example.com'>twitter</a>
            </div>
        </div>
    );
}

export default BlogSidebar;