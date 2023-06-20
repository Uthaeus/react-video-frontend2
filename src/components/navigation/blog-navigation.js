import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { UserContext } from "../../store/user-context";

function BlogNavigation() {
    const { user, logoutUser } = useContext(UserContext);

    function logoutHandler() {
        fetch('http://localhost:4000/users/sign_out', {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('practice-token')}`
            },
        })
        .then(response => {
            if (response.ok) {
                logoutUser();
                localStorage.removeItem('practice-token');
                return response.json();
            }
        })
        .catch(error => console.log('blog nav logout error: ', error)); 
    }

    return (
        <div className="blog-navigation-container">
            <div className="blog-navigation-header">
                <h1>Blog Navigation</h1>
            </div>

            <div className="blog-navigation-links">
                <NavLink to="/" className={({isActive}) => isActive ? 'blog-nav-link link-active' : 'blog-nav-link'}>Home</NavLink>
                <NavLink to="/about" className={({isActive}) => isActive ? 'blog-nav-link link-active' : 'blog-nav-link'}>About</NavLink>
                <NavLink to="/contact" className={({isActive}) => isActive ? 'blog-nav-link link-active' : 'blog-nav-link'}>Contact</NavLink>   
                <NavLink to="/blogs" className={({isActive}) => isActive ? 'blog-nav-link link-active' : 'blog-nav-link'} exact>Blogs</NavLink>
            </div>

            <div className="blog-navigation-auth">
                {user ? (
                    <NavLink onClick={logoutHandler} className="blog-nav-link">Logout</NavLink>
                ) : (
                    <>
                        <NavLink to="/sign-in" className="blog-nav-link">Login</NavLink>
                        <NavLink to="/sign-up" className="blog-nav-link">Sign Up</NavLink>
                    </>
                )}
            </div>
        </div>
    );
}

export default BlogNavigation;