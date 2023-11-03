import "./style.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase";
import { signOut } from "firebase/auth";

const SideBar = ({ showMenu, toggleMenu, darkModeActive }) => {
    const navigate = useNavigate();
    const userEmail = localStorage.getItem("email") ? localStorage.getItem("email") : "user@example.com";

    const logout = () => {
        signOut(auth).then(() => {
            localStorage.removeItem("uid");
            localStorage.removeItem("email");
            navigate("/");
        }).catch((error) => {
        });
    };

    return (
        <aside className={`side-menu__container ${showMenu ? 'side-menu__container-active' : ''}`} onClick={toggleMenu}>
            <nav className={`slide-menu ${showMenu ? 'slide-menu-active' : ''} ${darkModeActive ? 'slide-menu-active-dark' : ''}`} onClick={(e) => e.stopPropagation()}>
                <section className={`menu-header ${darkModeActive ? 'menu-header-dark' : ''}`}>
                    <span className="greeting__text">Welcome Back</span>
                    <div className="profile-image__container">
                        <img src="https://www.jamf.com/jamf-nation/img/default-avatars/generic-user-purple.png" alt="profile-image" className="profile__image" />
                    </div>
                    <div className="account-details">
                        <span className="name__text">{userEmail}</span>
                        <span className="email__text">Free Plan</span>
                    </div>
                </section>
                <section className="menu-body">
                    <ul className={`menu-links ${darkModeActive && 'menu-links-dark'}`}>
                        <li className="menu-link">
                            <NavLink to="/home" onClick={toggleMenu} activeclassname="link-active">Home</NavLink>
                        </li>
                        <li className="menu-link">
                            <NavLink to="/home" onClick={toggleMenu} activeclassname="link-active">Add City</NavLink>
                        </li>
                        <li className="menu-link" onClick={logout}>Logout</li>
                    </ul>
                </section>
                <section className="menu-footer">
                    <p className={`copyright__text ${darkModeActive && 'copyright__text-dark'}`}>Copyright © 2023</p>
                </section>
            </nav>
        </aside>
    )
}

export default SideBar