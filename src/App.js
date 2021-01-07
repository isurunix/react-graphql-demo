import './App.css';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import AppCard from "./components/AppCard";
import { ApolloProvider } from '@apollo/client';
import { graphQLClient } from './GraphQLClient';

function App() {
  return (
    <div className="container">
      <section id="header">
        <Header />
      </section>
      <section id="main">
        <ApolloProvider client={graphQLClient}>
          <AppCard />
        </ApolloProvider>
      </section>
    </div>

  );
}

export default App;