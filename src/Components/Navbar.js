import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <>
      <div className="navigation">
        <nav>
            <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
                <li>Daily News</li>
                <li>Help</li>
                <li><input type="search" name="" id="SearchBox" placeholder='Search Here' /></li>
            </ul>
        </nav>
      </div>
      </>
    )
  }
}

export default Navbar
