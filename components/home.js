import React from "react";
const homePage = () => {
  return (
    <ul class="nav nav-pills">
      <li class="nav-item">
        <a class="nav-link noah" aria-current="page" href="">
          Noah Sherman
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link " aria-current="page" href="/about">
          About
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/contact">
          Contact
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Projects">
          Projects
        </a>
      </li>
    </ul>
  );
};
export default homePage;
