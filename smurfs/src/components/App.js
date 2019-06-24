import React from 'react';
import styled from 'styled-components';
import { SmurfEditView } from '../views/Smurfs/SmurfEditView';
import { Route } from 'react-router-dom';
import { SmurfsListView } from '../views/Smurfs';
export const App = () => {
	return (
		<StyledApp>
			<h1>The Smurfs</h1>
			<StyledContainer>
				<Route exact path="/" render={props => <SmurfsListView {...props} />} />
				<Route exact path="/smurfs/:id/edit" render={props => <SmurfEditView {...props} />} />
			</StyledContainer>
		</StyledApp>
	);
};

const StyledContainer = styled.div`
	width: 80%;
	margin: 0 auto;
`;

const StyledApp = styled.main`
	text-align: center;
	margin-top: 50px;
	color: #764abc;
	font-size: 2rem;
`;
