import React from "react";
import "./App";
import { NativeRouter, Switch, Route } from "react-router-native";

import Start from "./components/Start";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Inventory from "./components/Inventory";
import NotFoundPage from "./components/notFoundPage";

function App() {
  return (
    <NativeRouter>
      <Switch>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Inventory" component={Inventory} />
        <Route exact path="/Contact" component={Contact} />
        <Route component={NotFoundPage} />
      </Switch>
    </NativeRouter>
  );
}

export default App;
