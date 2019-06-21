import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from '../Form';

export const Smurf = ({ smurf, deleteSmurf }) => {
	const { name, age, height, id } = smurf;

	const handleDelete = () => {
		deleteSmurf(id);
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
				<Link to={`/smurfs/${id}/edit`}>Edit</Link>
			</div>
		</div>
	);
};

Smurf.propTypes = {
	smurf: PropTypes.object
};
