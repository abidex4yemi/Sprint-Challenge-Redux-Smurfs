import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Form';

export const Smurf = ({ smurf, deleteSmurf, updateSmurf }) => {
	const { name, age, height, id } = smurf;

	const handleDelete = () => {
		deleteSmurf(id);
	};

	const handleUpdate = () => {
		updateSmurf(id);
	};

	return (
		<div>
			<header>
				<h3>{name}</h3>
			</header>
			<div>
				<p>Age: {age}</p>
				<p>Height: {height}</p>
			</div>
			<div>
				<Button buttonText="delete" onclick={handleDelete} type="button" />
				<Button buttonText="Update" onclick={handleUpdate} type="button" />
			</div>
		</div>
	);
};

Smurf.propTypes = {
	smurf: PropTypes.object
};
