import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from '../Form';

export const Smurf = ({ smurf, deleteSmurf }) => {
	const { name, age, height, id } = smurf;

	const handleDelete = () => {
		deleteSmurf(id);
	};

	return (
		<StyledSmurf>
			<header>
				<h3>{name}</h3>
			</header>
			<StyledBody>
				<p>Age: {age}</p>
				<p>Height: {height}</p>
			</StyledBody>
			<StyledFooter>
				<Button buttonText="delete" onclick={handleDelete} type="button" />
				<Link to={`/smurfs/${id}/edit`}>Edit</Link>
			</StyledFooter>
		</StyledSmurf>
	);
};

Smurf.propTypes = {
	smurf: PropTypes.object
};

const StyledSmurf = styled.div`
	margin: 20px;
	background: #764abc;
	color: #fff;
	border-radius: 5px;
	min-width: 200px;
	line-height: 1.5;

	header {
		border-bottom: 1px solid #f4f4f4;
		padding: 0.5em;
	}
`;

const StyledBody = styled.div`padding: 0.5em;`;

const StyledFooter = styled.div`
	padding: 0.5em;
	display: flex;
	justify-content: space-between;

	button,
	a {
		width: 45%;
		text-decoration: none;
		background: #f4f4f4;
		color: #764abc;
		text-align: center;
		font-size: 1em;
		padding: 0.5rem;
		border: 0;
		border-radius: 5px;
		transition: 0.2s;

		&:hover {
			background: rgba(0, 0, 0, 0.5);
			color: #f4f4f4;
		}
	}
`;
