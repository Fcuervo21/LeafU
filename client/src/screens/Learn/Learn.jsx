import React from 'react'
import { Divider, Grid, Paper, Typography } from '@mui/material'
import useStyles from "./components/styles";
import { useTheme } from "@emotion/react";
import EducationCard from './components/EducationCard/EducationCard';
import leafuImg from "../../assets/images/LogoMiniWhite.png"

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
        <Typography variant='h4' sx={{ textAlign: 'center' }} >Get involved. Save the world!🌎</Typography>
        <Divider sx={{ mb: 3 }} />
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
            </Swiper>
          </Grid>
          <Grid item xs={12}>
            <Divider sx={{ mb: 3 }} />
            <Typography variant='h5' sx={{ textAlign: 'center' }} >What do you want to learn today?</Typography>
          </Grid>
          <Grid item xs={12} lg={6}>
            <EducationCard
              title="Course 1"
              subtitle1="Progress"
              info1="56%"
              subtitle2="Started"
              info2="11/03/22"
              subtitle3="Finished"
              info3="--/--/--"
              imgSrc={leafuImg} />
          </Grid>
          <Grid item xs={12} lg={6}>
            <EducationCard
              title="Course 2"
              subtitle1="Progress"
              info1="37%"
              subtitle2="Started"
              info2="11/03/22"
              subtitle3="Finished"
              info3="--/--/--"
              imgSrc={leafuImg} />
          </Grid>
          <Grid item xs={12} lg={6}>
            <EducationCard
              title="Course 3"
              subtitle1="Progress"
              info1="15%"
              subtitle2="Started"
              info2="11/03/22"
              subtitle3="Finished"
              info3="--/--/--"
              imgSrc={leafuImg} />
          </Grid>
          <Grid item xs={12} lg={6}>
            <EducationCard
              title="Course 4"
              subtitle1="Progress"
              info1="0%"
              subtitle2="Started"
              info2="11/03/22"
              subtitle3="Finished"
              info3="--/--/--"
              imgSrc={leafuImg} />
          </Grid>
          <Grid item xs={12} lg={6}>
            <EducationCard
              title="Course 5"
              subtitle1="Progress"
              info1="0%"
              subtitle2="Started"
              info2="11/03/22"
              subtitle3="Finished"
              info3="--/--/--"
              imgSrc={leafuImg} />
          </Grid>
          <Grid item xs={12} lg={6}>
            <EducationCard
              title="Course 6"
              subtitle1="Progress"
              info1="0%"
              subtitle2="Started"
              info2="11/03/22"
              subtitle3="Finished"
              info3="--/--/--"
              imgSrc={leafuImg} />
          </Grid>
          <Grid item xs={12} lg={6}>
            <EducationCard
              title="Course 7"
              subtitle1="Progress"
              info1="0%"
              subtitle2="Started"
              info2="11/03/22"
              subtitle3="Finished"
              info3="--/--/--"
              imgSrc={leafuImg} />
          </Grid>
          <Grid item xs={12} lg={6}>
            <EducationCard
              title="Course 8"
              subtitle1="Progress"
              info1="0%"
              subtitle2="Started"
              info2="11/03/22"
              subtitle3="Finished"
              info3="--/--/--"
              imgSrc={leafuImg} />
          </Grid>

        </Grid>
      </div>
    </>
  )
}

export default Learn;