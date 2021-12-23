import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Users from "./Components/Users";
import Search from "./Components/Search";
import Alert from "./Components/Alert";
import About from "./Components/About";
import User from "./Components/User";
import GithubState from "./Context/GithubState";

function App() {
  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar title="Github Finder" icon="fab fa-github" />
          <div className="container">
            <Alert />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <React.Fragment>
                    <Search />
                    <Users />
                  </React.Fragment>
                )}
              />
              <Route path="/about" render={About} />
              <Route
                path="/user/:login"
                render={(props) => <User {...props} />}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
  // }
}

export default App;
