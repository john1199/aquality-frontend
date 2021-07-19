import React from "react";
export default function Header() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="b-nav container-fluid  ms-5 me-5 ">
            <a className="navbar-brand text-light" href="/#">
              Aquality
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse float-right "
              id="navbarNav"
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/#">
                    Home
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Menu
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a className="dropdown-item" href="/#">
                        Monitorea las fuentes hidricas
                      </a>
                    </li>
                      <hr className="dropdown-divider" />
                    <li>
                      <a className="dropdown-item" href="/#">
                        Historico
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="/#">
                        Cartografia Nacional
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item me-2">
                  <a className="nav-link btn btn-primary" href="/#" role="button">
                    SignIn
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link btn btn-primary" href="/#" role="button">
                    SignUp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
