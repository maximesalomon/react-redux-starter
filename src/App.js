import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './components/Home';
import About from './components/About';

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
      </div>
    </Router>
  );
}

export default App;
