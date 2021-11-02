import React, { Component } from "react";
import Home from "./components/home";
import Contact from "./components/contact";
import About from "./components/about";
import Nav from "./components/nav";
import Cards from "./components/cards";
import './App.css'
import { useHistory } from "react-router";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class App extends Component {
  render() {
    return ( 
      <Router>
        <div className='bod'>
          <Nav />

          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/cards" component={Cards} />
          <Route exact path="/contact" component={Contact} />
          <h1 className='h1home'>Welcome to React </h1>
          <img className='imgbody' src ='https://hunterae.com/wp-content/uploads/images/live-sound-audio-react-logo-download-videohive-12858420-free-hunterae-com-3.jpg'/>
        </div>
      </Router>
    );
  }
}
