import React from 'react'
import Salutacion from './Salutacion'
import { Component } from 'react'

export class LoginContro extends Component {
	constructor(props) {
		super(props)
		this.handleLoginClick = this.handleLoginClick.bind(this)
		this.handleLogoutClick = this.handleLogoutClick.bind(this)
		this.state = { isLoggedIn: false }
	}
	handleLoginClick() {
		this.setState({ isLoggedIn: true })
	}
	handleLogoutClick() {
		this.setState({ isLoggedIn: false })
	}
	render() {
		const isLoggedIn = this.state.isLoggedIn;
		let button;
		if (isLoggedIn) {
			button = <LogoutButton onClick={this.handleLogoutClick} />
		} else {
			button = <LoginButton onClick={this.handleLoginClick} />
		}
		return (
			<div>
				<Saluda isLoggedIn={isLoggedIn} />
				{button}
			</div>
		)
	}
}

function Saluda(props) {
	const isLoggedIn = props.isLoggedIn;
	if (isLoggedIn) {
		const usuario = "riki";
		return <Salutacion nick={usuario} />
	} else {
		return <SalutacioConvidat />
	}
}

function SalutacioConvidat() {
	return <span>siusplau identifica't</span>
}

function LoginButton(props) {
	return (
		<button onClick={props.onClick} className="btn btn-success">
			Login
		</button>
	)
}


function LogoutButton(props) {
	return (
		<button onClick={props.onClick} className='btn btn-danger'>
			Logout
		</button>
	)
}

export default LoginContro