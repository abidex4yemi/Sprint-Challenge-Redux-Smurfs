import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { SmurfsList } from '../../components/Smurfs';
import { connect } from 'react-redux';
import { getSmurfs } from '../../redux/actions';

const SmurfsListView = props => {
	const { getSmurfs, smurfs, fetchingSmurfs } = props;

	useEffect(getSmurfs, []);

	if (fetchingSmurfs) {
		return <div>Loading...</div>;
	}

	if (smurfs.length > 0) {
		return <SmurfsList smurfs={smurfs} />;
	}

	return (
		<React.Fragment>
			<div>No smurfs available</div>
		</React.Fragment>
	);
};

SmurfsListView.propTypes = {
	smurfs: PropTypes.array.isRequired,
	fetchingSmurfs: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
	return {
		smurfs: state.smurfReducer.smurfs,
		fetchingSmurfs: state.smurfReducer.fetchingSmurfs
	};
};

export default connect(mapStateToProps, { getSmurfs })(SmurfsListView);
