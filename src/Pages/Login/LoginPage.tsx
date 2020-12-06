import React from "react";
import LoginCard from "../../Components/Login/LoginCard";
import { Box } from "@material-ui/core";

function LoginPage() {
    return (
        <Box
            width="inherit"
            height="100vh"
            display="flex"
            alignItems="center"
            textAlign="center"
        >
            <LoginCard />
        </Box>
    );
}

export default LoginPage;
