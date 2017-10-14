import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  render () {
    const { links } = this.props;
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <ul className="nav navbar-nav">
            <li><Link to="/">Home</Link></li>
            {links.map((cat, index) => (
              <li key={index}><Link to={cat.path}>{cat.name}</Link></li>
            ))}
          </ul>
        </div>
      </nav>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const { categories } = state;
  const links = categories.map(category => {
    return {
      name: category.name.charAt(0).toUpperCase() + category.name.slice(1),
      path: category.path,
    }
  })

  return {
    links,
  }
}

export default connect(mapStateToProps)(Header);
