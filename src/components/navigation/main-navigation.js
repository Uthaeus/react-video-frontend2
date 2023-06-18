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
                auth
            </div>
        </div>
    );
}

export default MainNavigation;