import React from "react";

export default function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-md fixed-top navbar-dark header">
        <div class="container">
          <a class="navbar-brand" href="/">
            <img
              src="/assets/logo.png"
              width="50"
              class="img-fluid d-md-none"
              alt=""
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse justify-content-between"
            id="navbarTogglerDemo01"
          >
            <a class="navbar-brand" href="/">
              <img
                src="/assets/logo.png"
                width="50"
                class="d-none d-md-block img-fluid"
                alt=""
              />
            </a>
            <ul class="navbar-nav mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">
                  About
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="/services">
                      Travels
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/services">
                      Logistics
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="services">
                      Businesses
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
