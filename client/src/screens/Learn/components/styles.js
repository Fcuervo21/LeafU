import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
	mainContainer: {
		width: "100%",
		padding: "5%",
		height: "100%",
		marginBottom: "60px"
	},
	swiperGrid: {
		height: "40vh",
		
	},
	swiper: {
		height: "100%",
		borderRadius: "10px !important",
	},
	swiperSlide1: {
		background: "url(https://experiencelife.lifetime.life/wp-content/uploads/2021/02/Talking-Trash-1280x720.jpg)",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		width: "100%",
	},
	swiperSlide2: {
		background: "url(https://www.britannica.com/explore/savingearth/wp-content/uploads/sites/4/2019/03/smog-hero.jpg)",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		width: "100%",
	},
	swiperSlide3: {
		background: "url(https://www.history.com/.image/t_share/MTU3ODc5MDg1NjI5OTA4Mjk3/nature-pollution.jpg)",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		width: "100%",
	},
}));