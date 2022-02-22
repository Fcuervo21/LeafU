import React, { setState } from "react";
import { Card } from "@mui/material";
import { ShareIcon, MoreVert } from '@mui/icons-material/Share';
import useStyles from "./styles";
import { Map } from "@mui/icons-material";

export const HomeCard = (props) => {
    const { children, variant } = props;
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
            {children}
        </Card>
    );
};

export default HomeCard;
