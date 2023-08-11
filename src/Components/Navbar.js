import React from "react";

function Navbar() {
  return (
    <div>
        <header>
      <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            PHONE ZONE
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor02">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Home
                  <span class="visually-hidden">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Apple
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Oppo
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Samsung
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Vivo
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  REDMI
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Realme
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  More
                </a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">
                    24*7 Customer Care
                  </a>
                  <a class="dropdown-item" href="#">
                    Become Seller
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">
                    Download App
                  </a>
                </div>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-sm-2"
                type="search"
                placeholder="Search"
              />
              <button class="btn btn-secondary my-2 my-sm-0 search" type="submit">
                Search
              </button>
              <button class="btn btn-secondary my-2 my-sm-0" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </nav>
      </header>
    </div>
  );
}

export default Navbar;
