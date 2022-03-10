import React from "react";
import useStyles from "./styles";
import WorldScene from "./WorldScene/WorldScene";
import { Divider, Typography } from "@mui/material";
import { HomeCard } from './../HomeCard/HomeCard';

const WorldCard = ({ title, status }) => {
    const classes = useStyles();

    return (
        <HomeCard title="My World" variant="big">
            <WorldScene status={status} />
        </HomeCard>
    );
}

export default WorldCard;
