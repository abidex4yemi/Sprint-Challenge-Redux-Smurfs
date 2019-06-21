import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import { Smurf } from './Smurf';

export const SmurfsList = props => {
	const { smurfs, deleteSmurf, updateSmurf } = props;

	return (
		<section>
			{smurfs.map(smurf => <Smurf key={uuid()} smurf={smurf} deleteSmurf={deleteSmurf} updateSmurf={updateSmurf} />)}
		</section>
	);
};

SmurfsList.propTypes = {
	smurfs: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			age: PropTypes.number.isRequired,
			height: PropTypes.string.isRequired,
			id: PropTypes.number.isRequired
		})
	)
};
