/** @format */

import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import { Navbar, User } from "./components";
import { Home, Backend, Cloud, Error, Frontend, Stack } from "./pages";

function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/stack' element={<Stack />}>
						<Route path='frontend' element={<Frontend/>} />
						<Route path='backend' element={< Backend />} />
					</ Route>	
					<Route path='/user' element={<User />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
