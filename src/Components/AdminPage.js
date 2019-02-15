import React, { Component } from 'react';
import { Homepage } from '../constants';
import { Button } from 'react-bootstrap';

class AccountCreated extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      username: '',
      password: '',
      windowState: 0
    }
  }

  loadHomePage = () => {
    window.location.href = Homepage;
  }


  handleClick = () => {
    if (this.state.prize !== 0) {
      this.setState({
        windowState: 1
      });
    } else {
      this.setState({
        windowState: 2
      });
    }
  }

  handleChange = (event) => {
    // eslint-disable-next-line default-case
    switch (event.target.className) {
      case "name":
        this.setState({
          name: event.target.value
        })
        break;
      case "username":
        this.setState({
          username: event.target.value
        })
        break;
      case "password":
        this.setState({
          password: event.target.value
        })
        break;

    }
    event.preventDefault();
  }

  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.name);
    event.preventDefault();
  }


  render() {
    return (
      <div>
        <h1>Admin Page</h1>
        <br /><br />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name: <input className="name" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Enter full Name" required /></label><br/>
          <label htmlFor="username">Username: <input className="username" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Enter a userame" required /></label><br/>
          <label htmlFor="password">Password: <input className="password" type="password" value={this.state.value} onChange={this.handleChange} placeholder="Enter a password" required /></label><br/>
          <input type="submit" value="Create User" />
        </form>
        <br /><br /><br /><br />
        <Button bsStyle="primary" onClick={(event) => {this.loadHomePage();}}>Logout</Button>

      </div>
    );
  }
}

export default AccountCreated;
