import './App.css';
import Header from './components/Header';
import LoginForm, { UserContext } from './components/LoginForm';
import Dashboard from "./components/Dashboard";
import { useHistory } from "react-router-dom";


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="container">
      <UserContext.Provider value={localStorage.getItem("PROFILE")}>
        <section id="main" className="App-main">

          <Router>
            <Switch>
              <Route exact path="/">
                <LoginForm />
              </Route>
              <Route path="/dashboard">
                <section id="header">
                  <Header />
                </section>
                <Dashboard />
              </Route>
              <Route path="/logout">
                <Logout />
              </Route>
            </Switch>
          </Router>
        </section>
      </UserContext.Provider>
    </div>
  );
}

function Logout() {
  localStorage.clear();
  useHistory().push("/")
  return null;
}

export default App;