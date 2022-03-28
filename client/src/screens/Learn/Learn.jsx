import React from 'react'
import { Grid, Paper } from '@mui/material'
import useStyles from "./components/styles";
import { useTheme } from "@emotion/react";
import EducationCard from './components/EducationCard/EducationCard';

import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

const Learn = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <>
      <div className={classes.mainContainer}>
        <Grid container spacing={3}>
          <Grid item xs={12} className={classes.swiperGrid}>
            <Swiper
              // install Swiper modules
              className={classes.swiper}
              modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
              slidesPerView={1}
              navigation={true}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
            >
              <SwiperSlide className={classes.swiperSlide1}></SwiperSlide>
              <SwiperSlide className={classes.swiperSlide2}></SwiperSlide>
              <SwiperSlide className={classes.swiperSlide3}></SwiperSlide>
              <SwiperSlide className={classes.swiperSlide4}></SwiperSlide>
            </Swiper>
          </Grid>
          <Grid item xs={12} lg={6}>
            <EducationCard title="Basics" imgSrc="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png" />
          </Grid>
          <Grid item xs={12} lg={6}>
            <EducationCard title="Basics" imgSrc="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png" />
          </Grid>
          <Grid item xs={12} lg={7}>
            <EducationCard title="Basics" imgSrc="https://upload.wikimedia.org/wikipedia/commons/e/e3/Logo_vector.png" />
          </Grid>
          <Grid item xs={12} lg={5}>
            <EducationCard title="Basics" imgSrc="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png" />
          </Grid>
          <Grid item xs={12} lg={5}>
            <EducationCard title="Basics" imgSrc="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png" />
          </Grid>
          <Grid item xs={12} lg={7}>
            <EducationCard title="Basics" imgSrc="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png" />
          </Grid>
          <Grid item xs={12} lg={6}>
            <EducationCard title="Basics" imgSrc="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png" />
          </Grid>
          <Grid item xs={12} lg={6}>
            <EducationCard title="Basics" imgSrc="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png" />
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Learn;