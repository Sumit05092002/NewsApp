import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
                <Link to="/">Business</Link>
                <Link to="/entertainment">Entertainment</Link>
                <Link to="/general">General</Link>
                <Link to="/health">Health</Link>
                <Link to="/science">Science</Link>
                <Link to="/sports">Sports</Link>
                <Link to="/technology">Technology</Link>
                <li><input type="search" name="" id="SearchBox" placeholder='Search Here' /></li>
            </ul>
        </nav>
      </div>
      </>
    )
  }
}

export default Navbar
