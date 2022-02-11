import React from 'react';
import { BottomNavigation as BottomNavbar, BottomNavigationAction, Typography, Paper } from '@mui/material';
import { Map, Home, Newspaper, Calculate, School } from '@mui/icons-material';
import useStyles from './styles'
import { withRouter } from 'react-router-dom';

const BottomNavigation = (props) => {
    const { history, location } = props;
    const classes = useStyles();

    const menuItems = [
        {
            text: 'Community',
            icon: <Map />,
            path: '/Community'
        },
        {
            text: 'News',
            icon: <Newspaper />,
            path: '/News'
        },
        {
            text: 'Home',
            icon: <Home />,
            path: '/'
        },
        {
            text: 'Calculator',
            icon: <Calculate />,
            path: '/Calculator'
        },
        {
            text: 'Learn',
            icon: <School />,
            path: '/Learn'
        },
    ]

    return (
        <Paper className={classes.paper} elevation={3}>
            <BottomNavbar>
                {menuItems.map((item, index) => {
                    const { text, icon, path } = item;
                    return (
                        <BottomNavigationAction key={text} label={text} icon={icon} onClick={() => history.push(path)}/>
                        )
                    })}
            </BottomNavbar>
        </Paper>
    );
};

export default withRouter(BottomNavigation);