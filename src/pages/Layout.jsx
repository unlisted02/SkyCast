import NavBar from "../components/navs/NavBar";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import { Routes, Route } from "react-router-dom";
import "./style.css";
import { useState } from "react";
import SideBar from "../components/navs/SideBar";
import Home from "./home/Home";
import AddPage from "./add/AddPage";
import Detail from "./detail/Detail";


const Layout = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [darkModeActive, setDarkModeActive] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const modeToggleSwitch = () => {
        setDarkModeActive(!darkModeActive);
    };

    return (
        <div>
            <SideBar
                showMenu={showMenu}
                darkModeActive={darkModeActive}
                toggleMenu={toggleMenu} />

            <main className={`root__container ${darkModeActive && 'root__container-dark'}`}>

                <NavBar
                    toggleMenu={toggleMenu}
                    darkModeActive={darkModeActive}
                    modeToggleSwitch={modeToggleSwitch} />

                <div className="main-container__bg">
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="signup" element={<SignUp />} />
                        <Route path="home" element={<Home darkMode={darkModeActive} />} />
                        <Route path="add" element={<AddPage darkMode={darkModeActive} />} />
                        <Route path="detail/:name" element={<Detail darkMode={darkModeActive} />} />
                    </Routes>
                </div>
            </main>
        </div>

    )
}

export default Layout