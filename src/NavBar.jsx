import React from 'react';
import './index.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
const NavBar = () => {
  return (
    <>
      <nav className="topfixed">
        <a href="#">COVID-19 restrictions might delay some deliveries.</a>
      </nav>
      <nav class="navbar navbar-expand-lg navigation sticky-top">
        <div class="container-fluid navigation">
          <a class="navbar-brand" href="#">
            <img
              className="NoiseImg"
              src="//cdn.shopify.com/s/files/1/0997/6284/files/logowithname.png?v=1611741895"
              alt=""
            />
          </a>
          <button
            class="navbar-toggler btn-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse navigation grid" id="navbarNav">
            <ul class="navbar-nav col-sm grid">
              <li class="nav-item ">
                <a class="nav-link active" aria-current="page" href="https://www.gonoise.com/collections/smart-watches">
                  Smart Watches
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://www.gonoise.com/collections/wireless-audio">
                  Audio
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://www.gonoise.com/collections/accessories">
                  Accessories
                </a>
              </li>
            </ul>
          </div>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span>
                  <ShoppingCartIcon />
                </span>
              </a>
            </li>
            {/* <li class="nav-item">
              <a class="nav-link" href="#">
                <img
                  class="icon-img"
                  src="//cdn.shopify.com/s/files/1/0997/6284/t/314/assets/account-icon.svg?v=4061005935392080502"
                  alt="account"
                ></img>
              </a>
            </li> */}
          </ul>
          <div>
            <span></span>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
