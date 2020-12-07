import React, { useState } from 'react';
import Button from '../atom/Button/Button';
import InputField from '../molecule/InputField/InputField';
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
	const baseUrl = process.env.REACT_APP_BASE_URL;
	console.log(baseUrl);

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

		const requestDeleteOptions = {
			method: 'Delete',
			mode: "cors",
			cache: "no-cache",
			body: JSON.stringify(formState.id),
			credentials: "same-origin",
			headers: {
				'Content-Type': 'application/json',
				"Access-Control-Allow-Origin": "Authorization",
			},
		};

		/*  TO DO: Putt the base url in an env file  */ 

		if (updatedState === "add") {
			fetch(`${baseUrl}/api/restaurant`, requestPostOptions)
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

		} else if (updatedState === "update") {
			fetch(`${baseUrl}/api/restaurant/${formState.id}`, requestUpdateOptions)
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
		} else {
			fetch(`${baseUrl}/api/restaurant/${formState.name}`, requestDeleteOptions)
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
			{updatedState === 'add'
				?
				<h3 className="form-header">Add a restaurant</h3>
				: updatedState === 'update'
					? <h3 className="form-header">Update an existing restaurant</h3>
					: updatedState === 'delete'
						? <h3 className="form-header">Delete an existing restaurant</h3>
						: null
			}
			{updatedState !== "delete" 
			? (
				<>
					<InputField
						type="number"
						id="id"
						name="id"
						labelText="Restaurant ID:"
						onChange={handleChange}
						value={formState.id}
						placeHolder="Enter ID"
					/>

					<InputField
						type="text"
						id="name"
						name="name"
						labelText="Restaurant Name:"
						onChange={handleChange}
						value={formState.name}
						placeHolder="Enter name"
					/>
					<InputField
						type="text"
						id="cuisine"
						name="cuisine"
						labelText="Cuisine:"
						onChange={handleChange}
						value={formState.cuisine}
						placeHolder="Enter cuisine"
					/>
					<InputField
						type="text"
						id="city"
						name="city"
						labelText="City:"
						onChange={handleChange}
						value={formState.city}
						placeHolder="Enter city"
					/>
					<InputField
						type="text"
						isTextArea={true}
						id="description"
						name="description"
						labelText="Description:"
						onChange={handleChange}
						value={formState.description}
						placeHolder="Enter description"
					/>
				</>
			)
				: (
					<InputField
						type="text"
						id="name"
						name="name"
						labelText="Restaurant Name:"
						onChange={handleChange}
						value={formState.name}
						placeHolder="Enter name"
					/>
				)
			}

			<Button buttonLabel="Submit" className="submit-btn" id="submit-btn" />
			{status && <p>{status}</p>}
		</form>
	);
}

export default AddRestaurantForm;
