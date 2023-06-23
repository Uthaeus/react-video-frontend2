import { Outlet } from "react-router";

import BlogNavigation from "../navigation/blog-navigation";
import BlogFooter from "../blogs/blog-footer";

function BlogLayout() {

    return (
        <div className="blog-layout-container">
            <BlogNavigation />
            <Outlet />
            <BlogFooter />
        </div>
    );
}

export default BlogLayout;