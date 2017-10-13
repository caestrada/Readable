import React, { Component } from 'react';

class Header extends Component {
  render () {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <ul className="nav navbar-nav">
            <li><a href="/">Home</a></li>
            {[{name:'React'}, {name:'Redux'}, {name:'Udacity'}].map((cat, index) => (
              <li key={index}><a href={cat.name}>{cat.name}</a></li>
            ))}
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header
