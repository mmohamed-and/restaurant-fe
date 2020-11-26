import React, { useState } from 'react';
import TileBlock from '../components/TileBlock/TileBlock';
import Button from '../components/atom/Button/Button';
import Footer from '../components/atom/Footer/Footer';

import '../styles/App.css';

function App() {


	return (
		<div className="App">
			<h1>Restaurants</h1>
			<div className="forms">
				<div className="form-inner">
					<AddRestaurantForm updatedState={update} />
				</div>
			</div>
			<TileBlock />
			<Footer footerText="Copyrighted @2020" />
		</div>
	);
}

export default App;
