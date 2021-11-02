import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const nav = () => {
  return (
    <div className='navv'>
<ul>
          <li>
              
            <Link to="./home">Home</Link>
          </li>
          <li>
            <Link to="./cards">Cards</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="./contact">Contact</Link>
          </li>
       </ul>
 </div>
  );
};

export default nav;
