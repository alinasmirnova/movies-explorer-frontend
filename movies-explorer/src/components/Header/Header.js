import Navigation from './Navigation';
import Auth from './Auth';
import InternalLink from '../InternalLink';
import logo from'../../images/logo.svg'
import './Header.css';
import { useEffect, useState } from 'react';
import Button from '../Button';
import Sidebar from './Sidebar';
import Account from './Account';

function Header({isLoggedIn = false}) {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const handleResize = (e) => {
        setScreenWidth(window.innerWidth);
        if (sidebarVisible) {
            setSidebarVisible(false);
        }
    };

    const openSideBar = () => {
        setSidebarVisible(true);
    }

    const closeSidebar =() => {
        setSidebarVisible(false);    
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    });

    return (
        <>
            <header className="header">
                <InternalLink className="header__logo" to="/">
                    <img src={logo} alt="Учебный проект" />
                </InternalLink>
                { !isLoggedIn && <Auth className="header__auth"/> }
                { isLoggedIn && screenWidth >= 1280 && (
                        <>
                            <Navigation /> 
                            <Account />
                        </>
                    )
                }
                { isLoggedIn && screenWidth < 1280 && <Button className="header__sidebar-button" onClick={openSideBar}/> }                    
            </header>
            <Sidebar visible={sidebarVisible} onClose={closeSidebar} />
        </>     
    );
}

export default Header;