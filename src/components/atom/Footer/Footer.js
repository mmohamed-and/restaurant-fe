import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Footer = ({ footerText }) => {
	return (
		<footer>
			<p>{footerText}</p>
		</footer>
	);
};


Footer.propTypes = {
	footerText: PropTypes.string
};


export default Footer;
