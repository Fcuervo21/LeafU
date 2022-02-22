import React, { setState } from "react";
import { Avatar, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import useStyles from "../styles";
import HomeCard from "../HomeCard/HomeCard";
import { Newspaper } from "@mui/icons-material";

export const NewsCard = (props) => {
    const { data } = props;
    const { source, author, title, description, url, urlToImage, publishedAt } = data;
    const classes = useStyles();

    return (
        <HomeCard>
            <CardHeader
                avatar={
                    <Avatar className={classes.avatar}>
                        <Newspaper color="primary" />
                    </Avatar>
                }
                title={title}
                subheader={source.name}
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
            />
            <CardMedia
                component="img"
                height="194"
                image={urlToImage}
                alt={title}
                onClick={ /* go to */ url}
            />
            <CardContent>
                <Typography variant="caption" color="text.secondary">
                    By {author} on {publishedAt}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </HomeCard>
    );
};

export default NewsCard;
