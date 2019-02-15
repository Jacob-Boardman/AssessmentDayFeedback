import React, { Component } from 'react';

import { BrowserRouter as Router, Link} from "react-router-dom";
import { Button } from 'react-bootstrap';
import {LinkAdminPage} from '../constants.js';
import Login from './loginPage.js';

class HomePage extends Component {

    registerAccountPageLoad = () =>{
      window.location.href = LinkAdminPage;
    }

  render() {
    return (

      <div>
       <header><h1>Assessment Day Feedback</h1></header> <br/> <br/>

            <h2>Please login</h2>

            <Login changePage={this.registerAccountPageLoad}/>

      </div>
    );
  }
}

export default HomePage;
