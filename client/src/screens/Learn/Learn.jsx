import React from 'react'
import { Grid, Paper } from '@mui/material'
import useStyles from "./components/styles";
import { useTheme } from "@emotion/react";
import EducationCard from './components/EducationCard/EducationCard';

const Learn = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <>
      <div className={classes.mainContainer}>
        <Grid container spacing={3}>
          <Grid item xs={6} lg={4}>
            <EducationCard title="Basics" imgSrc="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png" />
          </Grid>
          <Grid item xs={6} lg={4}>
            <EducationCard title="Basics" imgSrc="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png" />
          </Grid>
          <Grid item xs={7} lg={4}>
            <EducationCard title="Basics" imgSrc="https://upload.wikimedia.org/wikipedia/commons/e/e3/Logo_vector.png" />
          </Grid>
          <Grid item xs={5} lg={6}>
            <EducationCard title="Basics" imgSrc="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png" />
          </Grid>
          <Grid item xs={5} lg={6}>
            <EducationCard title="Basics" imgSrc="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png" />
          </Grid>
          <Grid item xs={7} lg={3}>
            <EducationCard title="Basics" imgSrc="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png" />
          </Grid>
          <Grid item xs={6} lg={6}>
            <EducationCard title="Basics" imgSrc="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png" />
          </Grid>
          <Grid item xs={6} lg={3}>
            <EducationCard title="Basics" imgSrc="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png" />
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Learn;