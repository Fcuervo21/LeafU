import React, { setState } from "react";
import { Divider, Paper, Typography, Box, Grid } from "@mui/material";
import { ShareIcon, MoreVert } from '@mui/icons-material/Share';
import useStyles from "./styles";
import { Map } from "@mui/icons-material";
import { useTheme } from '@emotion/react';

export const EducationCard = ({ title, subtitle1, subtitle2, subtitle3, info1, info2, info3, imgSrc }) => {
    const theme = useTheme();
    const classes = useStyles();

    return (
        <Paper elevation={1} className={classes.card}>
            <Grid container>
                <Grid item container xs={3}>
                    <Grid item xs={12}>
                        <Box
                            className={classes.image}
                            component="img"
                            alt={title}
                            src={imgSrc}
                        />
                    </Grid>
                </Grid>
                <Grid item container xs={9}>
                    <Grid item xs={12}>
                        <Typography variant="h4" color="white">{title}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h5" color="white">{subtitle1}</Typography>
                        <Typography variant="h6" color="white">{info1}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h5" color="white">{subtitle2}</Typography>
                        <Typography variant="h6" color="white">{info2}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h5" color="white">{subtitle3}</Typography>
                        <Typography variant="h6" color="white">{info3}</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default EducationCard;