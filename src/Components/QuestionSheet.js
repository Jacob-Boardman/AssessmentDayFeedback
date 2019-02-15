import React, { Component } from 'react';
import { Homepage } from '../constants';
import { Button } from 'react-bootstrap';

class HomePage extends Component {

    loadHomePage = () => {
        window.location.href = Homepage;
      }

    
  render() {
    return (
        <div>
            <h1>Question Sheet</h1>
            <br/><br/><br/><br/>
            <Button bsStyle="primary" onClick={(event) => {this.loadHomePage();}}>Logout</Button>
        </div>

    );

    }
}

export default HomePage;