/** @format */

import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav className='header'>
			<div className='logo'>
				<Link to='/'>ROUTER</Link>
			</div>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/stack'>Stack</Link>
				</li>
				<li>
					<Link to='/user'>Users</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
