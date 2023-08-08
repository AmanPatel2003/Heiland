import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img
            src="https://m.media-amazon.com/images/I/61it9ljiKqL.jpg"
            alt=""
            width="60"
            height="60"
            style={{ marginRight: "1px" }}
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link" href="6">
                Product
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Company
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="7">
                Learn
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="11">
                Medicine
              </a>
            </li>
          </ul>
          <button class="btnn" type="submit">
            Where To Buy
          </button>
        </div>
      </div>
    </nav>
  );
}
