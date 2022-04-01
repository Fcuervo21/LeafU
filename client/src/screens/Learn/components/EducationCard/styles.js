import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    card: {
        padding: "2vh",
        borderRadius: "10px !important",
        backgroundColor: `${theme.palette.primary.dark}  !important`,
        textAlign: "center",

    },
    image: {
        padding: "vh",
        height: "100%",
        maxHeight: "100px"
    }
}));