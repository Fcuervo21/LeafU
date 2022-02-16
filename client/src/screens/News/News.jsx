import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";

//Import actions
import { getNews } from "../../actions/news";

import useStyles from "./components/newsCard/styles";
import NewsCard from "./components/newsCard/NewsCard";

const News = () => {
	const classes = useStyles();

	const dispatch = useDispatch();
	const news = useSelector((state) => state.news);

	console.log(news);

	useEffect(() => {
		dispatch(getNews());
	}, [dispatch]);

	return (
		<>
			{!news.length ? (
				<div className={classes.progressContainer}>
					<CircularProgress />
				</div>
			) : (
				<div className={classes.mainContainer}>
					{news.map((item, index) => {
						return (
							<NewsCard
								key={item.title}
								image={item.urlToImage}
								title={item.title}
								content={item.description}
								link={item.url}
							/>
						);
					})}
				</div>
			)}
		</>
	);
};

export default News;
