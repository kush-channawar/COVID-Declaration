import React, { Fragment } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  
} from "react-router-dom";
import { toast } from "react-toastify";

//components



import Forms from "./Forms";
toast.configure();


function App() {
  return (
    <Fragment>
      <Router>
        <div className="container">
          <Switch>
          <Route
              exact
              path="/"
              render={props =>
                
                  <Forms {...props}  />
                
              }
            />

          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
