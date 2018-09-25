import React from 'react';
// import ReactPropTypes from 'prop-types';
import AuthPanel from './AuthPanel';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Header extends React.Component {


  render() {

    return (
      <header>
        <div className="mr-5 ml-5">
          <nav className="navbar navbar-expand-lg  navbar fixed-top navbar-inverse mid">
            <Link className="navbar-brand" to={'/'}>
              <img src="image/logo3.PNG" width="60" height="60"/>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon-light"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav mr-auto mt-lg-0">
                <li className="nav-item">
                  <Link className="nav-link text-light" to={'/'}>Home</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="#">About</a>
                </li>
                <li className=" nav-item">
                  <Link className=" nav-link text-light" to={'/product'}>Games</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="#">Help</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="#">Blog</a>
                </li>
              </ul>
            </div>
            <form className="form-inline mt-2">
              <a href="#" className="user-icon">
                <i className="fa fa-user-o fa-2x mr-3"
                   // style="color:green"
                   aria-hidden="true">
                </i>
              </a>
              <AuthPanel
                history={this.props.history}
                logoutUser={this.props.logoutUser}
                loggedIn={this.props.loggedIn}
              />
              <input
                className="form-control-sm mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"/>
              <button
                className="btn btn-sm btn-outline-success my-2 my-sm-0"
                type="submit">
                Search
              </button>
            </form>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
