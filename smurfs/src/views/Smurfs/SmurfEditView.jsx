import React from 'react';
import styled from 'styled-components';
import { SmurfFormView } from './index';

export const SmurfEditView = props => {
	const { id } = props.match.params;

	return (
		<StyledSmurfEditView>
			<SmurfFormView {...props} id={id} />
		</StyledSmurfEditView>
	);
};

const StyledSmurfEditView = styled.div`
	form {
		text-align: center;
	}
`;
