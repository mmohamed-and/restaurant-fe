import React, { useState } from 'react';
import "./style.css";

const AddRestaurantForm = ({ updatedState }) => {
	const [formState, setFormState] = useState({
		id: 0,
		name: '',
		cuisine: '',
		city: '',
		description: ''
	});
	const [status, setStatus] = useState("");

	const handleChange = (event) => {
		const { name, value, type } = event.target;

		setFormState({
			...formState,
			[name]: type === 'number' ? parseFloat(value) : value,
		});
	};

	const handleForm = (event) => {
		event.preventDefault();

		const requestUpdateOptions = {
			method: 'PUT',
			mode: "cors",
			cache: "no-cache",
			body: JSON.stringify(formState),
			credentials: "same-origin",
			headers: {
				'Content-Type': 'application/json',
				"Access-Control-Allow-Origin": "Authorization",
			},
		};

		const requestPostOptions = {
			method: 'POST',
			mode: "cors",
			cache: "no-cache",
			body: JSON.stringify(formState),
			credentials: "same-origin",
			headers: {
				'Content-Type': 'application/json',
				"Access-Control-Allow-Origin": "Authorization",
			},
		};


		if(updatedState){
			fetch('/api/restaurant/' + formState.id, requestUpdateOptions)
				.then((response) => {
					console.log(response, 'response');
					setStatus(response.statusText);
					return response.json();
				})
				.then((data) => {
					console.log(data, 'data updated');
				})
				.catch((err) => {
					console.log(err, 'error');
				})

		} else {
			fetch('/api/restaurant', requestPostOptions)
			.then((response) => {
				console.log(response, 'response');
				setStatus(response.statusText);
				return response.json();
			})
			.then((data) => {
				console.log(data, 'data sent');
			})
			.catch((err) => {
				console.log(err, 'error');
			})
		}

		setFormState({
			id: 0,
			name: '',
			cuisine: '',
			city: '',
			description: ''
		});
	}

	return (
		<form className="form" onSubmit={handleForm}>
			{updatedState ? <h3 className="form-header">Update an existing restaurant</h3> : <h3 className="form-header">Add a restaurant</h3>}
			<div className="input-field">
				<label htmlFor="name" className="id">Restaurant ID: </label>
				<input type="number" id="id" name="id" onChange={handleChange} value={formState.id} placeholder="Enter ID" />
			</div>
			<div className="input-field">
				<label htmlFor="name" className="name">Restaurant Name: </label>
				<input type="text" id="name" name="name" onChange={handleChange} value={formState.name} placeholder="Enter name" />
			</div>
			<div className="input-field">
				<label htmlFor="cuisine" className="cuisine">Cuisine: </label>
				<input type="text" id="cuisine" name="cuisine" onChange={handleChange} value={formState.cuisine} placeholder="Enter cuisine" />
			</div>
			<div className="input-field">
				<label htmlFor="" className="city">City: </label>
				<input type="text" id="city" name="city" onChange={handleChange} value={formState.city} placeholder="Enter city" />
			</div>
			<div className="input-field">
				<label htmlFor="" className="desc">Description: </label>
				<textarea type="text" id="desc" name="description" onChange={handleChange} value={formState.description} placeholder="Enter description" />
			</div>
			<button type="submit" id="submit-btn">Submit</button>
			{status && <p>{status}</p>}
		</form>
	);
}

export default AddRestaurantForm;
