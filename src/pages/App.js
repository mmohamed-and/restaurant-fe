import React, { useState } from 'react';
import AddRestaurantForm from '../components/AddRestaurantForm/AddRestaurantForm';
import TileBlock from '../components/TileBlock/TileBlock';
import Button from '../components/atom/Button/Button';
import Footer from '../components/atom/Footer/Footer';

import '../styles/App.css';

function App() {
	const [update, setUpdate] = useState(false);
	const handleAdd = (e) => {
		setUpdate(false)
	}

	const handleUpdate = (e) => {
		setUpdate(true);
	}


	return (
		<div className="App">
			<h1>Restaurants</h1>
			<div className="forms">
				<div className="form-inner">
					<div className="header-buttons">
						<Button
							type="button"
							id="add"
							className={update === false ? "add-header-btn button-on" : "add-header-btn"}
							onClick={handleAdd}
							buttonLabel="Add"
						/>
						<Button
							type="button"
							id="update"
							className={!update === false ? "update-header-btn button-on" : "update-header-btn"}
							onClick={handleUpdate}
							buttonLabel="Update"
						/>
					</div>
					<AddRestaurantForm updatedState={update} />
				</div>
			</div>
			<TileBlock />
			<Footer footerText="Copyrighted @2020" />
		</div>
	);
}

export default App;
