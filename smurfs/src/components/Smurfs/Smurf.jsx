import React from 'react';
import PropTypes from 'prop-types';

export const Smurf = ({ smurf }) => {
	const { name, age, height } = smurf;

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
	smurf: PropTypes.object
};
