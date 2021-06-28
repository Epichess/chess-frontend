import './App.css';
import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Menu from './pages/Menu/Menu';
import Game from "./pages/Game/Game";
import Settings from "./components/Settings/Settings";

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path={"/"} component={Menu} />
          <Route path={"/Game"} component={Game} />
          <Route path={"/Settings"} component={Settings} />
      </Switch>
    </Router>
  );
}

export default App;
