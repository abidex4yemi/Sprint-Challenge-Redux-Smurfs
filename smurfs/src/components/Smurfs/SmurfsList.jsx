import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import { Smurf } from './Smurf';

export const SmurfsList = props => {
	const { smurfs, deleteSmurf } = props;

	return (
		<StyledSmurfsList>
			{smurfs.map(smurf => <Smurf key={uuid()} smurf={smurf} deleteSmurf={deleteSmurf} />)}
		</StyledSmurfsList>
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

const StyledSmurfsList = styled.section`
	display: flex;
	justify-content: space-between;
`;
