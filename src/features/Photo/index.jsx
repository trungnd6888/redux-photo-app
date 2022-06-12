import React from "react";
import MainPage from "./pages/MainPage";
import AddEditPage from "./pages/AddEditPage";
import NotFound from "../../components/NotFound";
import { Route, Switch, useRouteMatch } from "react-router-dom";

Photo.propTypes = {};

function Photo(props) {
  const match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={match.url} component={MainPage} exact />
        <Route path={`${match.url}/add`} component={AddEditPage} />
        <Route path={`${match.url}/:photoId`} component={AddEditPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default Photo;
