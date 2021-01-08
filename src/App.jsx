import {
  BrowserRouter as Router,

  Route, Switch, useHistory
} from "react-router-dom";
import './App.css';
import Dashboard from "./components/Dashboard";
import Header from './components/Header';
import LoginForm, { UserContext } from './components/LoginForm';



function App() {
  return (
    <div className="container">
      <section id="main" className="App-main">
        <Router>
          <Switch>
            <Route exact path="/">
              <LoginForm />
            </Route>
            <Route path="/dashboard">
              <UserContext.Provider value={JSON.parse(localStorage.getItem("PROFILE"))}>
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
  );
}

function Logout() {
  localStorage.clear();
  useHistory().push("/")
  return null;
}

export default App;