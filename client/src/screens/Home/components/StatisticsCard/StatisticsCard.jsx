import React, { setState } from "react";
import { Avatar, Button, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";
import { ShareIcon } from '@mui/icons-material/Share';
import useStyles from "./styles";
import HomeCard from "../HomeCard/HomeCard";
import { Chart } from 'react-chartjs-2';

export const StatisticsCard = ({ title, variant, chartType, chartData }) => {

    const classes = useStyles();

    return (
        <HomeCard title={title} variant={variant} /* onClick={ } */>
            <Chart className={classes.chart} type={chartType} data={chartData} />
        </HomeCard>
    );
};

export default StatisticsCard;
