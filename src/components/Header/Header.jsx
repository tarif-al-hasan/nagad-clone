
import React from 'react';
import Logo from '../../images/Upay-Logo.jpg';
import "./Header.css";
function Header() {
  return (
    <nav className="navbar navbar-expand-lg">
  <div className="container-fluid p-0">
    <a className="navbar-brand" href="/home">
        <img className="rounded-circle" src={Logo} alt="" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/whoareyou">Who Are You?</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Products & Campaigns</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='/'>Partners</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='/'>Service Location</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='/'>Media</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='/'></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='/'>Bangla</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}

export default Header;