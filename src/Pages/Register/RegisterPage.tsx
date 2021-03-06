import React from "react";
import RegisterCard from "../../Components/RegisterCard/RegisterCard";
import { Box } from "@material-ui/core";

function RegisterPage() {
    return (
        <Box
            width="inherit"
            display="flex"
            alignItems="center"
            textAlign="center"
        >
            <RegisterCard />
        </Box>
    );
}

export default RegisterPage;
