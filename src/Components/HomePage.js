import React, { Component } from 'react';

import { LinkAdminPage, LinkQuestionSheet } from '../constants.js';
import Login from './loginPage.js';

class HomePage extends Component {

  registerAccountPageLoad = () => {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === 'admin' && password === 'admin') {
      window.location.href = LinkAdminPage;
    } else {
      window.location.href = LinkQuestionSheet;
    }
  }

  render() {
    return (

      <div>
        <header><h1>Assessment Day Feedback</h1></header> <br /> <br />

        <h2>Please login</h2>

        <Login changePage={this.registerAccountPageLoad} />

      </div>
    );
  }
}

export default HomePage;
