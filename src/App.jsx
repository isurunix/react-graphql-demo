import React from "react";
import {
  BrowserRouter as Router,

  Redirect,

  Route, Switch
} from "react-router-dom";
import './App.css';
import Dashboard from "./components/Dashboard";
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import { UserContext } from "./components/LoginForm/User";



class App extends React.Component {

  constructor(props) {
    super(props);

    this.setCurrentUser = (currentUser) => {
      console.log(currentUser);
      this.setState({ currentUser: currentUser });
    };

    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      currentUser: localStorage.getItem("PROFILE"),
      setCurrentUser: this.setCurrentUser,
    };
  }

  render() {

    if (!this.state.currentUser) {
      return <div className="container">
        <section id="main" className="App-main">
          <LoginForm user={this.state} />
        </section>
      </div>
    }

    return <div className="container">
      <section id="main" className="App-main">
        <Router>
          <Switch>
            <Route path="/">
              {/* Setting up user context with logged in user data.
                * All children components can access the consumer to fetch user data
               */}
              <UserContext.Provider value={this.state}>
                <section id="header">
                  <Header />
                </section>
                <Dashboard />
              </UserContext.Provider>
            </Route>
            <Route path="/logout">
              <Logout />
            </Route>
          </Switch>
        </Router>
      </section>
    </div>
  }

}


function Logout() {
  localStorage.clear();
  return <Redirect to="/"></Redirect>;
}

export default App;