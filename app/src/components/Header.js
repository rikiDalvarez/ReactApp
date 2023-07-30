import React, { Component } from 'react';
import Salutacion from './Salutacion';
import LoginContro from './LoginContro';

import logo from "../img/logo.jpeg"
//class component 

// class Header extends Component {
// 	render() {
// 		const usuario = "riki"
// 		return (
// 			<div className="header">
// 				<h1>
// 					<img src={logo} height="50px" alt="dibujo de refugio" />
// 					El teu portal de montañas <LoginContro />
// 				</h1>
// 			</div>
// 		)
// 	}
// }
function Header() {
	return (
		<div className="header">
			<h1>
				<img src={logo} height="50px" alt="dibujo de refugio" />
				El teu portal de montañas <LoginContro />		</h1>
		</div>
	)
}

export default Header;