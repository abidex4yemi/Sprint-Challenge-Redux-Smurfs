import React from 'react';
import PropTypes from 'prop-types';

export const Smurf = props => {
	const { name, age, height } = props;

	return (
		<div>
			<header>
				<h3>{name}</h3>
			</header>
			<div>
				<p>Age: {age}</p>
				<p>Height: {height}</p>
			</div>
		</div>
	);
};

Smurf.propTypes = {
	name: PropTypes.string.isRequired,
	age: PropTypes.number.isRequired,
	height: PropTypes.string.toString
};
