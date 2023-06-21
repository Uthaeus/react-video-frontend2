import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

import { UserContext } from "../../store/user-context";
import { set } from "react-hook-form";

function PortfolioNavigation() {
    const { user, logoutUser } = useContext(UserContext);
    const [navOpen, setNavOpen] = useState(false);

    let navUser = user ? user.username : 'Guest User';

    function logoutHandler() {
        fetch('http://localhost:4000/users/sign_out', {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('practice-token')}`
            }
        })
        .then(response => {
            if (response.ok) {
                logoutUser();
                return response.json();
            }
        })
        .catch(error => console.log('portfolio logout error', error));
    }

    function navToggleHandler() {
        let element = document.querySelector('.portfolio-navigation');
        if (!navOpen) {
            element.classList.add('show-nav');
            setTimeout(() => {
                element.classList.remove('hide-nav');
            }, 500);
        } else {
            element.classList.add('hide-nav');
            setTimeout(() => {
                element.classList.remove('show-nav');
            }, 500);
        }

        setNavOpen(!navOpen);
    }

    return (
        <div className="portfolio-navigation hide-nav">
            <div className="portfolio-navigation-content">
                <div className="portfolio-navigation-socials">
                    <a href='example.com' className='portfolio-social-link'>Facebook</a>
                    <a href='example.com' className='portfolio-social-link'>Twitter</a>
                    <a href='example.com' className='portfolio-social-link'>Instagram</a>
                    <a href='example.com' className='portfolio-social-link'>LinkedIn</a>
                    <a href='example.com' className='portfolio-social-link'>GitHub</a>
                    <a href='example.com' className='portfolio-social-link'>YouTube</a> 
                </div>

                <div className="portfolio-navigation__links">
                    <NavLink to="/" className={({isActive}) => isActive ? 'portfolio-link link-active' : 'portfolio-link'} end>Home</NavLink>

                    <NavLink to="/about" className={({isActive}) => isActive ? 'portfolio-link link-active' : 'portfolio-link'}>About</NavLink>

                    <NavLink to="/contact" className={({isActive}) => isActive ? 'portfolio-link link-active' : 'portfolio-link'}>Contact</NavLink>

                    <NavLink to="/portfolio" className={({isActive}) => isActive ? 'portfolio-link link-active' : 'portfolio-link'}>Portfolio</NavLink>

                    <NavLink to="/blogs" className={({isActive}) => isActive ? 'portfolio-link link-active' : 'portfolio-link'}>Blogs</NavLink>
                </div>

                <div className="portfolio-navigation__auth">
                    {user ? (
                        <NavLink onClick={logoutHandler} className='portfolio-link'>Logout</NavLink>
                    ) : (
                        <>
                            <NavLink to="/sign-in" className={({isActive}) => isActive ? 'portfolio-link link-active' : 'portfolio-link'}>Login</NavLink>

                            <NavLink to="/sign-up" className={({isActive}) => isActive ? 'portfolio-link link-active' : 'portfolio-link'}>Sign Up</NavLink>
                        </>
                    )}
                </div>
            </div>

            <div className="portfolio-navigation-lead">
                <p className="portfolio-navigation-lead__text">{navUser}</p>
                <p className="portfolio-navigation-lead__toggle" onClick={navToggleHandler}>
                    {navOpen ? '^' : 'v'}
                </p>
            </div>
        </div>
    );
}

export default PortfolioNavigation;