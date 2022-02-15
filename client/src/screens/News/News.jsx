import React from "react";
import useStyles from "./components/newsCard/styles";
import NewsCard from "./components/newsCard/NewsCard";

const News = () => {
	const classes = useStyles();
	return (
		<div className={classes.mainContainer}>
			<NewsCard
				image=""
				title="Lorem ipsum dolor sit amet"
				content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eleifend, erat vitae aliquet tincidunt, turpis libero tempor dolor, nec accumsan quam lectus eget magna."
			/>
			<NewsCard
				image=""
				title="Lorem ipsum dolor sit amet"
				content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eleifend, erat vitae aliquet tincidunt, turpis libero tempor dolor, nec accumsan quam lectus eget magna."
			/>
			<NewsCard
				image=""
				title="Lorem ipsum dolor sit amet"
				content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eleifend, erat vitae aliquet tincidunt, turpis libero tempor dolor, nec accumsan quam lectus eget magna."
			/>
		</div>
	);
};

export default News;
