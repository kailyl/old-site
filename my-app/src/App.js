import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from "react-router-dom";
import web1 from './images/v2(1).jpg';
import web2 from './images/v2(2).png';
import web3 from './images/v2(3).png';
import nets1 from './images/nets(1).png';
import nets2 from './images/nets(2).png';
import nets3 from './images/nets(3).png';
import game1 from './images/2048(1).png';
import game2 from './images/2048(2).png';
import game3 from './images/2048(3).png';
import paint1 from './images/paint(1).png';
import paint2 from './images/paint(2).png';
import paint3 from './images/paint(3).png';
import webb1 from './images/website(1).png';
import webb2 from './images/website(2).png';
import webb3 from './images/website(3).png';
import twitter1 from './images/twitter(1).png';
import twitter2 from './images/twitter(2).jpeg';
import twitter3 from './images/twitter(3).png';
import plotify1 from './images/plotify(1).png';
import plotify2 from './images/plotify(2).jpeg';
import plotify3 from './images/plotify(3).jpg';
import Homepage from "./components/Homepage"
import Next from "./components/Next"
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
	const data = require('./ProjectInfo.json');

	const firstImage = [plotify3, twitter1, web1, nets1, game1, paint1, webb1]; 
	const secondImage = [plotify2, twitter2, web2, nets3, game2, paint2, webb2]; 
	const thirdImage = [plotify1, twitter3, web3, nets2, game3, paint3, webb3]; 

	return (
		<>
			<Router>
				<ScrollToTop />
				<Routes>
					<Route exact path="/"
						element={<Homepage />} />
					{data.map((item, index) => {
						return <Route exact path={item.path}
									element={<Next 
										val={item} 
										key={index} 
										img1={firstImage[index]} 
										img2={secondImage[index]} 
										img3={thirdImage[index]}/> } />
					})}
 				</Routes>
			</Router>
		</>
	);
}

export default App;
