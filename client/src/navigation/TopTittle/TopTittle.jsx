import React, { useState, useEffect } from "react";
import { Avatar, AppBar, Toolbar, IconButton, Button } from "@mui/material";
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import * as actionType from "../../constants/actionTypes";
import Logo from "../../assets/images/LogoMiniWhite.png";
import useStyles from "./styles";

export const TopTittle = (props) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const classes = useStyles();

    const logout = () => {
        dispatch({ type: actionType.LOGOUT });

        history.push('/auth');

        setUser(null);
    };

    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);


    return (
        <>
            <AppBar position="sticky" color="primary">
                <Toolbar className={classes.toolContainer}>
                    <IconButton onClick={() => history.push("/")}>
                        <Avatar alt="Logo" src={Logo} />
                    </IconButton>
                    {user ? (
                        <div>
                            <Avatar alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                        </div>
                    ) : (
                        <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                    )}
                </Toolbar>
            </AppBar>
        </>
    );
};

export default TopTittle;
