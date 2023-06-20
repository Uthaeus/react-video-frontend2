import { Outlet } from "react-router";

function BlogLayout() {

    return (
        <div className="blog-layout-container">
            <Outlet />
        </div>
    );
}

export default BlogLayout;