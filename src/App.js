import './App.css';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import AppCard from "./components/AppCard";
import { ApolloProvider } from '@apollo/client';
import { graphQLClient } from './GraphQLClient';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="container">
      <section id="header">
        <Header />
      </section>
      <section id="main" className="App-main">
        <ApolloProvider client={graphQLClient}>
          <Router>
            <Switch>
              <Route exact path="/">
                <LoginForm />
              </Route>
              <Route path="/dashboard">
                <AppCard />
              </Route>
            </Switch>
          </Router>
        </ApolloProvider>
      </section>
    </div>

  );
}

export default App;