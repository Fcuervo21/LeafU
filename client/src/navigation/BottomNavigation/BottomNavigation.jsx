import React from 'react';
import { BottomNavigation as BottomNavbar, BottomNavigationAction, Typography, Paper } from '@mui/material';
import { Map, Home, Newspaper, Calculate, School, Brightness7 } from '@mui/icons-material';
import useStyles from './styles'
import { withRouter } from 'react-router-dom';

import { ColorModeContext } from "../../assets/toggleColorMode";
import { useTheme } from '@emotion/react';

const BottomNavigation = (props) => {
    const colorMode = React.useContext(ColorModeContext);
    const { history, location } = props;
    const classes = useStyles();
    const theme = useTheme();

    /*     const [value, setValue] = React.useState(["home", "news"]);
        const handleChange = (event, newValue) => {
            setValue(newValue);
        }; */

    const menuItems = [
        {
            text: <Typography color="primary">Community</Typography>,
            icon: <Map color="primary" />,
            value: "community",
            path: '/Community'
        },
        {
            text: <Typography color="primary">News</Typography>,
            icon: <Newspaper color="primary" />,
            value: "news",
            path: '/News'
        },
        {
            text: <Typography color="primary">Home</Typography>,
            icon: <Home color="primary" />,
            value: "home",
            path: '/'
        },
        {
            text: <Typography color="primary">Calculator</Typography>,
            icon: <Calculate color="primary" />,
            value: "calculator",
            path: '/Calculator'
        },
        {
            text: <Typography color="primary">Learn</Typography>,
            icon: <School color="primary" />,
            value: "learn",
            path: '/Learn'
        },
    ]


    return (
        <Paper className={classes.paper} elevation={3}>
            <BottomNavbar showLabels/* value={value} onChange={handleChange} */>
                {menuItems.map((item, index) => {
                    const { text, value, icon, path } = item;
                    return (
                        <BottomNavigationAction key={text} label={text} value={value} icon={icon} onClick={() => history.push(path)} />
                    )
                })}
                {/* <BottomNavigationAction key={<Typography color="primary">Mode</Typography>} label={<Typography color="primary">{theme.palette.mode === "dark" ? "Light" : "Dark"} mode</Typography>} icon={<Brightness7 color="primary" />} onClick={colorMode.toggleColorMode} /> */}
            </BottomNavbar>
        </Paper>
    );
};

export default withRouter(BottomNavigation);