import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from 'react'
import './App.css'
import Swap from "../src/components/swap/swap";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path = "/" component={Swap}/>
          <Route path="/swap" component={Swap}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
