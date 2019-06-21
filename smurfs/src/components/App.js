import React from 'react';
import { SmurfEditView } from '../views/Smurfs/SmurfEditView';
import { Route } from 'react-router-dom';
import { SmurfsListView } from '../views/Smurfs';
export const App = () => {
	return (
		<main>
			<div>
				<Route exact path="/" render={props => <SmurfsListView {...props} />} />
				<Route exact path="/smurfs/:id/edit" render={props => <SmurfEditView {...props} />} />
			</div>
		</main>
	);
};
