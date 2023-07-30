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
// styles
import "./index.scss"
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <AppBar style={{ background: "#003462" }}>
            <Container style={{ padding: 0 }}>
                <div className="content">
                    <Link href="/" className="navbar-logo">
                        logo
                    </Link>
                    <nav>
                        <ul>
                            <li>
                                <Link
                                    href="/"
                                    target="_self"
                                    className="without-pointer-events"
                                >
                                    <span>title</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </Container>
        </AppBar>
    )
}

export default Navbar