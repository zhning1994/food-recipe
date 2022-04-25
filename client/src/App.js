import './App.css';
import React from "react";
import Home from './pages/Home/Home';
import Auth from './components/Auth/Auth.js'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/auth' exact component={Auth} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
