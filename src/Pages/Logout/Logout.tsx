import React, { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import useGetMutation from "../../Effects/useGetMutation";
import userState from "../../States/user-state";
import { removeCookie } from "../../Utils/cookie";

function Logout() {
    const [isLogout, setLogout] = useState<boolean>(false);
    const [user,setUser] = useRecoilState(userState);
    
    useEffect(() => {
        mutate();
    }, [])
    
    const onSuccess = (response: any) => {
        if(response.data.message === 'Successfully Logged Out'){
            removeCookie('_t');
            setUser(null);
            setLogout(true);
        }
    };

    const [mutate, { error ,isLoading }] = useGetMutation(
        process.env.REACT_APP_DEFAULT_API + "logout",
        onSuccess,
        true
    );
    
    useEffect(() => {
        if(error) removeCookie('_t');
    }, [error])
    
    return (
       <>
        { isLoading? ''  : isLogout? <Redirect to="/login" />: ''}
       </>
    );
}

export default Logout;
