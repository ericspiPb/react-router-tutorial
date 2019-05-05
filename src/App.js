import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Nav from './Nav'
import About from './pages/About'
import Shop from './pages/Shop'
import ItemDetail from './pages/ItemDetail'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:itemid" component={ItemDetail} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
)

export default App;
