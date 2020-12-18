import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import Eclipse from "../../Assets/Images/Eclipse.svg";

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: 100,
        position: "fixed",
        top: "0",
        left: "0",
        display: "flex",
        backgroundColor: theme.palette.background.default,
    },
    loading: {
        margin: "auto",
        display: "block",
    },
}));

interface IProps {}

export function Loading() {
    const classes = useStyles();

    return (
        <Box className={classes.backdrop} width="100vw" height="100vh">
            <img className={classes.loading} src={Eclipse} alt="load" />
        </Box>
    );
}
