import React, { setState } from "react";
import { Avatar, Button, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";
import { ShareIcon, MoreVert } from '@mui/icons-material/Share';
import useStyles from "../styles";
import HomeCard from "../HomeCard/HomeCard";
import { Map } from "@mui/icons-material";

export const CommunityCard = (props) => {
    const { data } = props;
    const { title, source, caption } = data;
    const classes = useStyles();

    return (
        <HomeCard /* onClick={} */>
            <CardHeader
                avatar={
                    <Avatar className={classes.avatar}>
                        <Map color="primary" />
                    </Avatar>
                }
                title={source.name}
                subheader={source.location}
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                }
            />
            <CardMedia /* aqu[i va el mapa */
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
            />
            <CardActions>
                <Button size="small">Learn More</Button>
                <Button size="small">Get involved</Button>
                <Button size="small">Directions</Button>
            </CardActions>
        </HomeCard>
    );
};

export default CommunityCard;
