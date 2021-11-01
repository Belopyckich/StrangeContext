import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import Posts from "../pages/Posts";
import About from "../pages/About";
import Error from "../pages/Error";

const routs = [
        {path: "/posts", page: <Posts/>},
        {path: "/about", page: <About/>},
        {path: "/error", page: <Error/>},
    ]

const AppRouter = () => {

    return (
    <Switch>
        {routs.map(rout => 
            <Route path={rout.path}>
                {rout.page}
            </Route>
        )}
      <Redirect to ="/error"/>
    </Switch>
    );
};

export default AppRouter;