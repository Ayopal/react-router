/** @format */

import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav className='header'>
			<div className='logo'>
				<Link to='/'>Home</Link>
			</div>
			<ul>
				<li>
					<Link to='/about'>About</Link>
				</li>
				<li>
					<Link to='/contact'>Contact</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
