import { NavLink } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "../../store/user-context";
import NavUserItem from "./nav-user-item";

function MainNavigation() {
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
                localStorage.removeItem('practice-token');
                logoutUser();
                return response.json();
            }
            throw new Error('Something went wrong');
        })
        .catch(error => console.log('logout error: ', error.message));
    }

    return (
        <div className="main-navigation-container">
            <div className="main-nav-logo-wrapper">
                {user ? <NavUserItem user={user} /> : 'Your Logo Here'}
            </div>

            <div className="main-nav-links-wrapper">
                <NavLink to="/" className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'} end>Home</NavLink>

                <NavLink to="/about" className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>About</NavLink>

                <NavLink to="/contact" className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>Contact</NavLink>

                <NavLink to="/blogs" className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>Blogs</NavLink>
            </div>

            <div className="main-nav-auth-wrapper">
                {user ? <p onClick={logoutHandler} className="nav-link">Logout</p> :
                <>
                    <NavLink to="/sign-up" className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>register</NavLink>

                    <NavLink to="/sign-in" className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>login</NavLink>
                </>
                }
            </div>
        </div>
    );
}

export default MainNavigation;