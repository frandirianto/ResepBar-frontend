import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginPage from "../Pages/Login/LoginPage";
import RegisterPage from "../Pages/Register/RegisterPage";
import MainPage from "../Pages/Main/MainPage";
import Logout from "../Pages/Logout/Logout";

const routes = [
    {
        path: "/login",
        component: LoginPage,
    },
    {
        path: "/register",
        component: RegisterPage,
    },
    {
        path: "/home",
        component: MainPage,
    },
    {
        path: "/logout",
        component: Logout,
    },
];

function MainRoutes() {
    return (
        <Switch>
            {routes.map(({ path, component }, index) => (
                <Route key={index} path={path} exact component={component} />
            ))}
            <Redirect to="/login" />
        </Switch>
    );
}

export default MainRoutes;
