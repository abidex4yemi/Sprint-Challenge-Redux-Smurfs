import React from 'react';
import { SmurfFormView } from './index';

export const SmurfEditView = props => {
	const { id } = props.match.params;

	return <SmurfFormView {...props} id={id} />;
};
