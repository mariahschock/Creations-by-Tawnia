import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import './App.css';

function App() {


  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <div className="links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
            </div>
          </nav>
          <div className="contact-btn">
            <button>Contact</button>
          </div>
        </header>
       
      

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
