import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from '../src/components/Home/Home';
import Portfolio from '../src/components/Portfolio/Portfolio';
import Contact from '../src/components/Contact/Contact';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container fluid>
          <Navbar />
          <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        </Container>
      </BrowserRouter>

    </div>
  );
}

export default App;
