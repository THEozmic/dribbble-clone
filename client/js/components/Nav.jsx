import React, { Component } from 'react';
import logo from '../images/logo.gif';

export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar is-fixed-top" role="navigation" ariaLabel="main navigation">
        <div className="navbar-brand m-l-20">
          <a className="navbar-item" href="#/">
          </a>
          <button className="button navbar-burger">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    )
  }
}