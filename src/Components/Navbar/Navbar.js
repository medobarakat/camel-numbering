import React from 'react'
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Stack,
    Button,
    Container,
    useScrollTrigger,
} from "@mui/material";
// logo
import MainLogo from "../../Assets/Logo/MainLogo"
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
//images
import Img from "../../Assets/Images/imgLogo.png"
// styles
import "./index.scss"
import { Link, useLocation } from 'react-router-dom';
const Navbar = () => {
    const location = useLocation();
    const routes = [
        { id: 6, title: "من نحن", path: "/aboutus" },
        { id: 5, title: "تواصل معنا", path: "/contactus" },
        { id: 4, title: "المعاملات", path: "/works" },
        { id: 3, title: "الخدمات", path: "/services" },
        { id: 2, title: "الاملاك", path: "/prop" },
        { id: 1, title: "الرئيسيه", path: "/" },
    ]
    return (
        <AppBar style={{ background: "#003462" }}>
            <Container style={{ padding: 0 }}>
                <div className="content">
                    <nav >
                        <ul className='mega-menu'>
                            {routes.map((route) => (
                                <li key={route.id} className='menu-item'>
                                    <Link
                                        to={route.path}
                                        className={`menu-link ${location.pathname === route.path ? 'active' : ''}`}
                                    >
                                        <span
                                        className={`${location.pathname === route.path ? 'active-link' : ''}`}
                                        >{route.title}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className='last-sec'>
                            <div className='user-container'>
                                <div className='link'>
                                    <KeyboardArrowDownIcon />
                                </div>
                                <p>
                                    اسامه عسكر
                                </p>
                                <img src={Img} alt="user" />
                            </div>
                            <SearchIcon />
                        </div>
                    </nav>
                    <Link href="/" className="navbar-logo">
                        <MainLogo />
                    </Link>
                </div>
            </Container>
        </AppBar>
    )
}

export default Navbar