import React, {Component} from 'react'
import { Button } from 'react-bootstrap';


class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			accNum: '',
			prize: 0
		}
	}
	render() {
		return(<div>
				<h1>Account Creation</h1>
				<br/><br/>
				First Name: <input id = 'firstName' type = 'text' required/><br/><br/>
				Last Name: <input id = 'lastName' type = 'text' required/><br/><br/>
				<Button bsStyle="primary" onClick = {this.props.loginButtonClick}>Submit</Button>
				</div>);
	}
}

export default Login;