/** @format */

import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav className='nav'>
			<div className='logo'>
				<Link to='/'>ROUTER</Link>
			</div>
			<ul>
				<li>
					<Link to='/stack'>Stack</Link>
				</li>
				<li>
					<Link to='/users'>Users</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
