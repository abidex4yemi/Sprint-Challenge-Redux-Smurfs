import React from 'react';
import { SmurfsListView } from '../views/Smurfs';
import SmurfFormView from '../views/Smurfs/SmurfFormView';
export const App = () => {
	return (
		<main>
			<div>
				<div>
					<SmurfsListView />
				</div>

				<div>
					<SmurfFormView />
				</div>
			</div>
		</main>
	);
};
