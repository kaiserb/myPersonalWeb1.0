import React from "react";

function Header() {
  return (
    <header className="jumbotron">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Welcome...</h1>
            <ul className="nav">
              <li className="nav-item">
                <a href="#">Home</a>
              </li>
              <li className="nav-item">
                <a href="#">About</a>
              </li>
              <li className="nav-item">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
