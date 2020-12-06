import { Box, Container, makeStyles } from "@material-ui/core";
import React from "react";
import "./App.scss";
import MainRoute from "./Routes/MainRoutes";
import NavigationBar from "./Components/NavigationBar/NavigationBar";

const useStyles = makeStyles((theme) => ({
    background: {
        // backgroundColor: theme.palette.background.default,
        backgroundColor: "wheat",
    },
}));

function App() {
    const classes = useStyles();

    return (
        <div className="App">
            <Box className={classes.background} width="100vw" height="100vh">
                <NavigationBar />
                <Container>
                    <MainRoute />
                </Container>
            </Box>
        </div>
    );
}

export default App;
