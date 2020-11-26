import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Button = ({ type, id, className, buttonLabel, onClick}) => {
	return (
		<button type={type} id={id} className={`button ${className}`} onClick={onClick}>{buttonLabel}</button>
	);
}

Button.propTypes = {
	type: PropTypes.string,
	id: PropTypes.string,
	className: PropTypes.string,
	onClick: PropTypes.func,
	buttonLabel: PropTypes.string,
}

export default Button;
