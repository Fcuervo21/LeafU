import React from 'react';
import useStyles from './components/styles';

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      Hola Home
    </div>
  )
}

export default Home;