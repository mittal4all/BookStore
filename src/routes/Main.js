import React from "react";
import { Route, Switch } from "react-router";
import Home from "../components/Home";
import Addcourse from "../components/Addcourse";
import ShowCourse from "../components/ShowCourse";
import FormPage from "../components/FormPage";
import EditPage from "../components/EditPage";
function Main() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/Addcourses" component={Addcourse} exact></Route>
        <Route path="/ShowCourse" component={ShowCourse} exact></Route>
        <Route path="/formpage" component={FormPage} exact></Route>
        <Route path="/editpage/:id" component={EditPage} exact></Route>
      </Switch>
    </div>
  );
}

export default Main;
