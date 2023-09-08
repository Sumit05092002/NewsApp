import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import Home from './Components/Home';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <Router>
        <div className='parent'>
          <Navbar />
          <br />
          <div className="routed">
            <Routes>
              <Route exact path="/"   element={<News key="business"country={"in"} pageSize={5} category={"business"}></News>} />
              <Route exact path="/sports" element={<News key="sports" country={"in"} pageSize={5} category={"sports"}></News>}/>
              <Route exact path="/entertainment"  element={<News key="entertainment" country={"in"}  pageSize={5} category={"entertainment"}></News>}/>
              <Route exact path="/health"  element={<News key="health" country={"in"} pageSize={5} category={"health"}></News>}/>
              <Route exact path="/general"  element={<News key="general" country={"in"} pageSize={5} category={"general"}></News>}/>
              <Route exact path="/science"  element={<News key="science" country={"in"} pageSize={5} category={"science"}></News>}/>
              <Route exact path="/technology"  element={<News key="technology" country={"in"} pageSize={5} category={"technology"}></News>}/>
              <Route exact path="/home" element={<Home></Home>}></Route>
              <Route exact path="/about" element={<About></About>}></Route>
              <Route exact path="/usa" element={<News key="general" country={"us"} pageSize={5} category={"general"}></News>}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    )
  }
}