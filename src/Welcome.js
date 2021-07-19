import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css"

function Welcome() {
  return (
    <main>
    <div>
      <h2>Welcome to Food On
         Tour!</h2>
      <h4>
        
        Nothing can break up a long day of travel like a great plate. This app
        was created by touring musicians who love food. We wanted to create a
        space to both find and share some great spots! To get started, create a
        profile. From there, you'll be able to start searching, sharing, and
        even putting together your own "bucket list" of places you can't wait to
        check out. Have fun & eat up!<br></br>
        <Link to="/createprofile"><button>Start my Profile</button></Link>
      </h4>
    </div>
    </main>
  );
}

export default Welcome;
