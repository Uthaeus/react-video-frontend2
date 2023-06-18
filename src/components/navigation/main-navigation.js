import { NavLink } from "react-router-dom";

function MainNavigation() {

    return (
        <div className="main-navigation-container">
            <div className="main-nav-logo-wrapper">
                logo/user
            </div>

            <div className="main-nav-links-wrapper">
                <NavLink to="/" className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'} end>Home</NavLink>

                <NavLink to="/about" className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>About</NavLink>

                <NavLink to="/contact" className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>Contact</NavLink>
            </div>

            <div className="main-nav-auth-wrapper">
                <NavLink to="/sign-up" className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>register</NavLink>

                <NavLink to="/sign-in" className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>login</NavLink>
            </div>
        </div>
    );
}

export default MainNavigation;