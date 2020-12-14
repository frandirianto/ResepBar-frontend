import { Box,  makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import "./App.scss";
import MainRoutes from "./Routes/MainRoutes";
import { getCookie, removeCookie } from "./Utils/cookie";
import useGetMutation from "./Effects/useGetMutation";
import { useRecoilState } from "recoil";
import userState from './States/user-state';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    background: {
        backgroundColor: "#333333",
    },
}));

function App() {
    const history = useHistory();
    const classes = useStyles();
    const access_token = getCookie('_t');
    const [user,setUser] = useRecoilState(userState);

    useEffect(() => {
        if(access_token){
            mutate();
        }
        else{
            history.push('/login');
        }
    }, [access_token])

    const onSuccess = (response: any) => {
        if(response.data){
            setUser(
                {
                    fullname: response.data.name,
                    username: response.data.username,
                    email: response.data.email
                }
            );
        }
    };

    const [mutate, { isLoading, error }] = useGetMutation(
        process.env.REACT_APP_DEFAULT_API + "user",
        onSuccess,
        true
    );

    useEffect(() => {
        if(error) removeCookie('_t');
    }, [error])

    return (
        <div className="App">
            <Box className={classes.background} minHeight="100vh">
                <MainRoutes />
            </Box>
        </div>
    );
}

export default App;
