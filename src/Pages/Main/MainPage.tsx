import React, { useEffect } from "react";
import { Box, Container } from "@material-ui/core";
import { useRecoilState } from "recoil";
import userState from "../../States/user-state";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import PrivateRoutes from "../../Routes/PrivateRoutes";

export default function MainPage() {
    const [user] = useRecoilState(userState);

    return (
        <>
            <NavigationBar user={user}/>
            <Box width="inherit" display="flex">
                <Container>
                    <PrivateRoutes/>
                </Container>
            </Box>
        </>
    );
}
