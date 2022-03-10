import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
    card: {
        padding: "2%",
        borderRadius: "10px !important"
    },
    big: { 
        height: "100%",
        minHeight: "",
        maxHeight: "100vh"
    },
    thick: {
        height: "33vw",
        maxHeight: "50vh"
    },
    small: {
        height: "auto",
        maxHeight: "50vh"
    },
}));
