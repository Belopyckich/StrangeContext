import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import Posts from "../pages/Posts";
import About from "../pages/About";
import Error from "../pages/Error";
import PostIdPage from '../pages/PostIdPage';

const AppRouter = () => {

    return (
    <Switch>
        <Route path={"/Error"} component={Error}/>
        <Route exact path={"/Posts"} component={Posts}/>
        <Route exact path={"/About"} component={About}/>
        <Route exact path={"/Post/:id"} component={PostIdPage}/>
        <Redirect to ="/error"/>
    </Switch>
    );
};

export default AppRouter;