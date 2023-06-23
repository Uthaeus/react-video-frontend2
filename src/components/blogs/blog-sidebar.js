import { useEffect, useState } from "react";

import BlogCategoryForm from "./blog-category-form";

function BlogSidebar({ user }) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/categories')
            .then(response => {
                return response.json();
            })
            .then(data => {
                setCategories(data);
            });
    }, []);

    function addCategoryHandler(cat) {
        setCategories([cat, ...categories]);
    }

    return (
        <div className="blog-sidebar">
            {user?.role === 'site_admin' && (
                <BlogCategoryForm addCategoryHandler={addCategoryHandler} />
            )}

            <h3 className="blog-sidebar-title">Categories</h3>

            <div className="blog-sidebar-categories">
                <p className="blog-sidebar-category">all</p>
                
                {categories.map((category) => {
                    return (
                        <div className="blog-sidebar-category-wrapper" key={category.id}>
                            <p className="blog-sidebar-category">{category.name}</p>
                            {user?.role === 'site_admin' && (
                                <p className="category-delete-btn">X</p>
                            )}
                        </div>
                    );
                })}
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