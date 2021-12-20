import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Users from "./Components/Users";
import axios from "axios";
import Search from "./Components/Search";
import Alert from "./Components/Alert";
import About from "./Components/About";
import User from "./Components/User";

function App() {
  const [users,setUsers] = useState([])
  const [user,setUser] = useState({})
  const [loading ,setLoading] = useState(false);
  const [alert ,set] = useState(null)
  const [repos,setRepos] = useState([])
  // state = { 
  //   users: [],
  //   user: {},
  //   loading: false,
  //   alert: null,
  //   repos:[]
  // };

   const SearchUser = async (params) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${params}`
    );
    setUsers(res.data.items)
    setLoading(false)
    // this.setState({ users: res.data.items, loading: false });
  };

  const onClear = () => {
    setUsers([])
    setLoading(false)
    // this.setState({ users: [], loading: false });
  };

  const setAlert = (msg, type) => {
    setAlert({ alert: { msg, type } })
    // this.setState({ alert: { msg, type } });
    setTimeout(() => setAlert(null), 3000);
  };

  const getUser = async (username) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${username}`
    );
    const repores = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );
    setUser(res.data)
    setRepos(repores.data)
    setLoading(false)
    
    // this.setState({ user: res.data, repos: repores.data, loading: false });
  };

  // getUserRepos = async (username) => {
  //   this.setState({ loading: true });
  //   const res = await axios.get(
  //     `https://api.github.com/users/${username}/repos`
  //   );
  //   this.setState({ repos: res.data, loading: false });
  // };

  // render() {
    // console.log(this.state);

    return (
      <Router>
        <div className="App">
          <Navbar title="Github Finder" icon="fab fa-github" />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <React.Fragment>
                    <Search
                      setAlert={setAlert}
                      SearchUser={SearchUser}
                      onClear={onClear}
                      showClear={users.length > 0 ? true : false}
                    />
                    <Users
                      users={users}
                      loading={loading}
                    />
                  </React.Fragment>
                )}
              />
              <Route path="/about" render={About} />
              <Route
                path="/user/:login"
                render={(props) => (
                  <User
                    {...props}
                    getUser={getUser}
                    user={user}
                    loading={loading}
                    // getUserRepos={rRepos}
                    repos={repos}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  // }
}

export default App;
