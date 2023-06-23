
import BlogCategoryForm from "./blog-category-form";

function BlogSidebar({ user }) {

    function addCategoryHandler(cat) {}

    return (
        <div className="blog-sidebar">

            <h3 className="blog-sidebar-title">Categories</h3>

            <div className="blog-sidebar-categories">
                <p className="blog-sidebar-category">all</p>
                <p className="blog-sidebar-category">javascript</p>
                <p className="blog-sidebar-category">react</p>
                <p className="blog-sidebar-category">ruby</p>
                <p className="blog-sidebar-category">postgresql</p>
            </div>

            <h3 className="blog-sidebar-title">Socials</h3>

            <div className="blog-sidebar-socials">
                <a className="blog-sidebar-social" href='www.example.com'>
                    <i className="bi bi-github"></i>
                </a>
                <a className="blog-sidebar-social" href='www.example.com'>
                    <i className="bi bi-linkedin"></i>
                </a>
                <a className="blog-sidebar-social" href='www.example.com'>
                    <i className="bi bi-instagram"></i>
                </a>
                <a className="blog-sidebar-social" href='www.example.com'>
                    <i className="bi bi-twitter"></i>
                </a>
                <a className="blog-sidebar-social" href='www.example.com'>
                    <i className="bi bi-twitch"></i>
                </a>
                <a className="blog-sidebar-social" href='www.example.com'>
                    <i className="bi bi-youtube"></i>
                </a>
            </div>
        </div>
    );
}

export default BlogSidebar;