import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../Pages/Home/HomePage";

const routes = [
    {
        path: "/home",
        component: HomePage,
    },
];

function PrivateRoutes() {
    return (
        <Switch>
            {routes.map(({ path, component }, index) => (
                <Route key={index} path={path} exact component={component} />
            ))}
        </Switch>
    );
}

export default PrivateRoutes;
