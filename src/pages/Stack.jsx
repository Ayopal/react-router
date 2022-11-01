/** @format */

import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

function Stack() {
	const location = useLocation();
	console.log(location);

	return (
		<div>
			<div className='navbar'>
				<ul>
					<li>
						<Link to='/stack/frontend'> Frontend </Link>
					</li>
					<li>
						<Link to='/stack/backend'> Backend </Link>
					</li>
					<li>
						<Link to='/stack/cloud'> Cloud </Link>
					</li>
				</ul>
			</div>
			{location.pathname === "/stack" ? (
				<div>
					<h1>STACK</h1>
				</div>
			) : (
				<Outlet />
			)}
		</div>
	);
}


export default Stack;