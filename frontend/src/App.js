import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import LandingPage from './component/LoadingPage';
import VideoDetails from "./component/VideoDetails";

export const config = {
  endpoint: `http://35.154.85.92:8082/v1`, // endpoints
};

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/video/:id" component={VideoDetails}/>
      </Switch>
    </div>
  );
}

export default App;
