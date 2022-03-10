import React, { setState } from "react";
import { Card, Divider, Paper, Typography } from "@mui/material";
import { ShareIcon, MoreVert } from '@mui/icons-material/Share';
import useStyles from "./styles";
import { Map } from "@mui/icons-material";
import { useTheme } from '@emotion/react';

export const HomeCard = ({ title, variant, children }) => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Paper elevation={1} className={`${variant === "big" ? classes.big : variant === "thick" ? classes.thick : classes.small} ${classes.card}`}>
            <Typography variant={variant === "big" ? "h4" : "h6"} color="primary">{title}</Typography>
            <Divider color="primary" />
            {children}
        </Paper>
    );
};

export default HomeCard;
