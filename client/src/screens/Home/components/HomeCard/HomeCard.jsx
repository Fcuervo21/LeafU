import React, { setState } from "react";
import { Card, Divider, Typography } from "@mui/material";
import { ShareIcon, MoreVert } from '@mui/icons-material/Share';
import useStyles from "./styles";
import { Map } from "@mui/icons-material";

export const HomeCard = ({title, variant, children }) => {
    const classes = useStyles();

    const getStyles = (variant) => {
        switch (variant) {
            case "big":
                
                return;
            case "thick":
                return;
            case "tall":
                return;
            default:
                return;
        }
    };

    return (
        <Card className={classes.body}>
            <Typography variant="h4" color="primary">{title}</Typography>
            <Divider color="primary"/>
            {children}
        </Card>
    );
};

export default HomeCard;
