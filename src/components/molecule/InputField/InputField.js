import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Input = ({ type, id, name, labelText, onChange, value, placeHolder, isTextArea }) => {
	return (
		<div className="input-field">
			<label htmlFor={name} className="id">{labelText} </label>
			{!isTextArea
				?
				<input type={type} id={id} name={name} onChange={onChange} value={value} placeholder={placeHolder} />
				:
				<textarea type={type}  id={id} name={name} onChange={onChange} rows="4" value={value} placeholder={placeHolder}
				/>
			}
		</div>

	);
};

Input.propTypes = {
	type: PropTypes.string,
	id: PropTypes.string,
	name: PropTypes.string,
	onChange: PropTypes.func,
	value: PropTypes.string,
	placeholder: PropTypes.string,
	isTextArea: PropTypes.bool
};


export default Input;
