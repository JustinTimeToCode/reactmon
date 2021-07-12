import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="pokemon/:id" component={Pokemon} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
