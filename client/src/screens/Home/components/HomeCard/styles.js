import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
    card: {
        padding: "2%",
        borderRadius: "10px !important",
        textAlign: "center",
    },
    big: {
        height: "100%",
        minHeight: "",
        maxHeight: "100vh"
    },
    thick: {
        height: "auto",
        maxHeight: "60vh"
    },
    small: {
        height: "auto",
        maxHeight: "60vh"
    },
}));
