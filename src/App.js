import React from "react";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Suspense } from "react";
import "./App.css";

//Lazy load - Code splitting
const Photo = React.lazy(() => import("./features/Photo"));

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Header />

          <Switch>
            <Redirect from="/" to="/photos" exact />

            <Route path="/photos" component={Photo} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
