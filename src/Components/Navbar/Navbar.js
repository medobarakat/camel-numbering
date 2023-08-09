import React, { useCallback } from 'react'
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
import { MainUrl, WalletData } from '../../Constance/ApiConstance';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setUser } from '../../Features/user/authSlice';

const Navbar = () => {
    const dispatch = useDispatch()
    const location = useLocation();
    const pathsWithoutNavbar = ["/login", "/signup", "/forgetpassword"];
    const showNavbar = !pathsWithoutNavbar.includes(location.pathname);
    const routes = [
        { id: 6, title: "من نحن", path: "/aboutus" },
        { id: 5, title: "تواصل معنا", path: "/contactus" },
        { id: 4, title: "المعاملات", path: "/transactions" },
        { id: 3, title: "الخدمات", path: "/services" },
        { id: 2, title: "الاملاك", path: "/prop" },
        { id: 1, title: "الرئيسيه", path: "/" },
    ]
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const wallet_id = 2469117966;
    const Savedtoken = useSelector(state => state.auth.token);

    // useEffect(()=>{
    //     getInitalData()
    // },[])

    // const getInitalData = async () => {
    //     setLoading(true)
    //      const url = MainUrl + WalletData + wallet_id;
    //      console.log(url)
    //     const config = {
    //         headers: {
    //           Accept: "application/json",
    //           Authorization : `bearer ${Savedtoken}`
    //         },
    //       };
    //     axios
    //         .get(url , config)
    //         .then((res) => {
    //             setLoading(false)
    //             console.log(res.data.data.Wallet)
    //             setData(res.data.data.Wallet)
    //             dispatch(setUser(res.data.data.Wallet))
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //             setLoading(false)
    //         });
    // };


    const getInitalData = useCallback(async () => {
        setLoading(true);
        const url = MainUrl + WalletData + wallet_id;
        console.log(url);
        const config = {
            headers: {
                Accept: 'application/json',
                Authorization: `bearer ${Savedtoken}`
            },
        };

        try {
            const res = await axios.get(url, config);
            setLoading(false);
            console.log(res.data.data.Wallet);
            setData(res.data.data.Wallet);
            dispatch(setUser(res.data.data.Wallet));
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    }, [wallet_id, Savedtoken]);

    useEffect(() => {
        getInitalData();
    }, [getInitalData]);

    return (
        <>
            {showNavbar && (
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
                                    {
                                        !loading && (
                                            <Link to={"/profile"} className='user-container'>
                                                <div className='link'>
                                                    <KeyboardArrowDownIcon />
                                                </div>
                                                <p>
                                                    {data.FIRSTNAME}{" "}{data.SECONDNAME}
                                                </p>
                                                <img src={Img} alt="user" />
                                            </Link>
                                        )
                                    }

                                    <SearchIcon />
                                </div>
                            </nav>
                            <Link href="/" className="navbar-logo">
                                <MainLogo />
                            </Link>
                        </div>
                    </Container>
                </AppBar>
            )}
        </>

    )
}

export default Navbar