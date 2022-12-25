import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from "react-router-dom";
import Homepage from "./components/Homepage"; 
import About from "./components/About";
import Art from "./components/Art";
import ScrollToTop from './components/ScrollToTop';


function App() {
	return (
		<>
			<Router>
				<ScrollToTop />
				<Routes>
					<Route exact path="/"
						element={<Homepage />} />
					<Route exact path="/about"
						element={<About />} />
					<Route exact path="/fnar"
						element={<Art />} />
 				</Routes>
			</Router>
		</>
	);
}

export default App;
