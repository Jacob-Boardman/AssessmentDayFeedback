import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import '../App.css';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: ''
		}
	}

	handleChange = (event) => {
		this.setState({
			username: event.target.value
		})
	}

	render() {
		return (<div id="loginBox">

			Username: <input id='username' type='text' onChange={this.handleChange} required /><br /><br />
			Password: <input id='password' type='password' required /><br /><br />
			<Button bsStyle="primary" onClick={(event) => { this.props.changePage(); this.props.loginButtonClick() }}>Submit</Button>
		</div>);
	}
}

export default Login;
