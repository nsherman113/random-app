import React from "react";
// import "./App";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import { NativeRouter, Switch, Route, Link } from "react-router-native";

import Start from "./components/Start";
// import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Inventory from "./components/Inventory";
import NotFoundPage from "./components/notFoundPage";

function App() {
  return (
    <Start>
      <NativeRouter>
        <SafeAreaView>
          <SafeAreaView>
            <Link to="/" underlayColor="#f0f4f7">
              <Text>Home</Text>
            </Link>
            <Link to="/about" underlayColor="#f0f4f7">
              <Text>About</Text>
            </Link>
            <Link to="/Contact" underlayColor="#f0f4f7">
              <Text>Contact</Text>
            </Link>
            <Link to="/Inventory" underlayColor="#f0f4f7">
              <Text>Inventory</Text>
            </Link>
            <Link to="/NotFoundPage" underlayColor="#f0f4f7">
              <Text>NotFoundPage</Text>
            </Link>
          </SafeAreaView>

          <Route exact path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Inventory" component={Inventory} />
          <Route path="/notFoundPage" component={NotFoundPage} />
        </SafeAreaView>
      </NativeRouter>
    </Start>
  );
}

export default App;
