/** @format */

import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import { Navbar } from "./components";
import { Users, Home, Backend, Cloud, Error, Frontend, Stack } from "./pages";

function App() {
	return (
			<div className='wrapper'>

		<Router>
				<Navbar />
			<div className='main'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/stack' element={<Stack />}>
						<Route path='frontend' element={<Frontend/>} />
						<Route path='backend' element={< Backend />} />
						<Route path='cloud' element={< Cloud />} />
					</ Route>	
					<Route path='/users' element={<Users />} />
					<Route path='/error' element={<Error />} />
					<Route path="*" element={<Navigate to ="/error" />} />
				</Routes>
	</div>
		</Router>
	</div>
	);
}

export default App;
