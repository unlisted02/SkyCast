import { useState } from "react";
import "./style.css";

const NavBar = ({darkModeActive,  toggleMenu, modeToggleSwitch}) => {
    return (
        <header className={`main__header ${darkModeActive && 'main__header-dark'}`}>
            <div className="left__section">
                <svg onClick={toggleMenu} className={`hamburger__icon ${darkModeActive && 'hamburger__icon-dark'}`} id="Menu_Burger_Icon" data-name="Menu Burger Icon" width="34" height="34" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m13 16.745c0-.414-.336-.75-.75-.75h-9.5c-.414 0-.75.336-.75.75s.336.75.75.75h9.5c.414 0 .75-.336.75-.75zm9-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm-4-5c0-.414-.336-.75-.75-.75h-14.5c-.414 0-.75.336-.75.75s.336.75.75.75h14.5c.414 0 .75-.336.75-.75z" fillRule="nonzero" />
                </svg>

                <svg className="logo__icon" viewBox="150.3 22.2 213.7 42.8">
                    <path fill="#00ff9b" d="M150.3 65V22.2L193 65z" data-name="Path 1"></path>
                    <path fill="#003eff" d="M193.1 65h-42.8L193 22.2z" data-name="Path 2"></path>
                    <text className={`${darkModeActive && 'logo__text-dark'} logo__text`} fill="#432c85"
                        fontFamily="SegoeUI-Semibold,Segoe UI" fontSize="30" fontWeight="600"
                        letterSpacing=".1em" transform="translate(220 56)">
                        <tspan >SkyCast</tspan>
                    </text>
                </svg>
            </div >

            <h3 className="date__text">Today</h3>

            <div className="mode-toggle__container">
                <span className="mode-toggle__text">Light</span>

                <label className="toggle-button__container">
                    <input onClick={modeToggleSwitch} type="checkbox" className="mode-toggle__input" />

                    <span className={`mode-toggle__bg ${darkModeActive && 'mode-toggle__bg-checked'}`}></span>

                    <span className={`mode-toggle__circle ${darkModeActive && 'mode-toggle__circle-checked'}`}></span>
                </label>

                <span className="mode-toggle__text">Dark</span>
            </div>
        </header >
    )
}

export default NavBar