import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginPage from "../Pages/Login/LoginPage";
import RegisterPage from "../Pages/Register/RegisterPage";
import MainPage from "../Pages/Main/MainPage";

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
];

function MainRoute() {
    return (
        <Switch>
            {routes.map(({ path, component }, index) => (
                <Route key={index} path={path} exact component={component} />
            ))}
            <Redirect to="/login" />
        </Switch>
    );
}

export default MainRoute;
