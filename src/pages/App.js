import React, { useState } from 'react';
import AddRestaurantForm from '../components/AddRestaurantForm/AddRestaurantForm';
import TileBlock from '../components/TileBlock/TileBlock';
import Button from '../components/atom/Button/Button';
import Footer from '../components/atom/Footer/Footer';

import '../styles/App.css';

function App() {
	const [update, setUpdate] = useState("add");
	const handleAdd = (e) => {
		setUpdate("add")
	}

	const handleUpdate = (e) => {
		setUpdate("update");
	}

	const handleDelete = (e) => {
		setUpdate("delete");
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
							className={update === 'add' ? "header-btn button-on" : "header-btn"}
							onClick={handleAdd}
							buttonLabel="Add"
						/>
						<Button
							type="button"
							id="update"
							className={update === 'update' ? "header-btn button-on" : "header-btn"}
							onClick={handleUpdate}
							buttonLabel="Update"
						/>
						<Button
							type="button"
							id="delete"
							className={update === 'delete' ? "header-btn button-on" : "header-btn"}
							onClick={handleDelete}
							buttonLabel="Delete"
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
