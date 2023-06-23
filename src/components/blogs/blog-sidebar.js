import { useEffect, useState } from "react";

import BlogCategoryForm from "./blog-category-form";

function BlogSidebar({ user, blogFilterHandler }) {
    const [categories, setCategories] = useState([]);
    const [showForm, setShowForm] = useState(false);    

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

    function categoryDeleteHandler(id) {
        console.log('delete');

        fetch(`http://localhost:4000/categories/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('practice-token'),
            }
        })
        .then(response => {
            if (response.ok) {
                setCategories(categories.filter((category) => category.id !== id));
            }
        })
        .catch((error) => console.log('category delete error: ', error));
    }

    return (
        <div className="blog-sidebar">
            {user?.role === 'site_admin' && (
                <p onClick={() => setShowForm(!showForm)} className="add-category-toggle">{showForm ? 'close' : 'add category'}</p> 
            )}

            {showForm && <BlogCategoryForm addCategoryHandler={addCategoryHandler} />}

            <h3 className="blog-sidebar-title">Categories</h3>

            <div className="blog-sidebar-categories">
                <div className="blog-sidebar-category-wrapper">
                    <p onClick={() => blogFilterHandler('all')} className="blog-sidebar-category">all</p>
                </div>
                
                {categories.map((category) => {
                    return (
                        <div className="blog-sidebar-category-wrapper" key={category.id}>
                            <p onClick={()=> blogFilterHandler(category.name)} className="blog-sidebar-category">{category.name}</p>
                            {user?.role === 'site_admin' && (
                                <p onClick={() => categoryDeleteHandler(category.id)} className="category-delete-btn">X</p>
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