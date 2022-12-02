import React from "react";
import "./navBar.css";
function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <div class="logo px-2 px-md-3 ms-3">
            Home<span class="text-white">.</span>
          </div>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="bi bi-list toggle-btn"></i>
        </button>
   
      </div>
    </nav>
  );
}

export default NavBar;


