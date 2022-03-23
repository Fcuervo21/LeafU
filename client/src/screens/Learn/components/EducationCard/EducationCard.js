import React, { setState } from "react";
import { Divider, Paper, Typography, Box } from "@mui/material";
import { ShareIcon, MoreVert } from '@mui/icons-material/Share';
import useStyles from "./styles";
import { Map } from "@mui/icons-material";
import { useTheme } from '@emotion/react';

export const EducationCard = ({ title, imgSrc }) => {
    const theme = useTheme();
    const classes = useStyles();

    return (
        <Paper elevation={1} className={classes.card}>
            <Box
                className={classes.image}
                component="img"
                alt={title}
                src={imgSrc}
            />
            <Divider color="primary" />
            <Typography variant="h5" color="white">{title}</Typography>
        </Paper>
    );
};

export default EducationCard;