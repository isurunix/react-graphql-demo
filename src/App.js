import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import LoginForm from "./components/LoginForm";
import AppCard from "./components/AppCard";

function App() {
  return (
    <div className="container">
      <section id="header">
      <Header />
      </section>
      <section id="main">
        <AppCard/>
      </section>
    </div>

  );
}

export default App;
