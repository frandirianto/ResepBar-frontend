import React from "react";
import LoginCard from "../../Components/LoginCard/LoginCard";
import { Box } from "@material-ui/core";
import { Loading } from "../../Components/Loading/Loading";

function LoginPage() {
    return (
        <Box
            width="inherit"
            height="100vh"
            display="flex"
            alignItems="center"
            textAlign="center"
        >
            {/* <LoginCard /> */}
            <Loading />
        </Box>
    );
}

export default LoginPage;
