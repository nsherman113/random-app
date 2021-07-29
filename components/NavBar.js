import { StatusBar } from "expo-status-bar";
import React, { useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Animated,
  ProgressViewIOSComponent,
} from "react-native";
const NavBar = () => {
  return (
    <Text>
      <ul class="nav nav-pills">
        <li class="nav-item">
          <a class="nav-link noah" aria-current="page" href="/Home">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="/About">
            About
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Inventory">
            Contact
          </a>
        </li>
      </ul>
    </Text>
  );
};
export default NavBar;
