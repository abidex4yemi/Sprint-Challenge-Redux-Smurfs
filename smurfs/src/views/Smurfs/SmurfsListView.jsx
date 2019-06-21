import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { SmurfsList } from '../../components/Smurfs';
import { SmurfFormView } from './index';
import { connect } from 'react-redux';
import { getSmurfs, deleteSmurf } from '../../redux/actions';

const SmurfsListView = props => {
	const { getSmurfs, smurfs, fetchingSmurfs, deleteSmurf } = props;

	useEffect(getSmurfs, []);

	if (fetchingSmurfs) {
		return <div>Loading...</div>;
	}

	if (smurfs.length > 0) {
		return (
			<div>
				<SmurfsList smurfs={smurfs} deleteSmurf={deleteSmurf} />
				<SmurfFormView />
			</div>
		);
	}

	return (
		<React.Fragment>
			<div>No smurfs available</div>
		</React.Fragment>
	);
};

SmurfsListView.propTypes = {
	smurfs: PropTypes.array.isRequired,
	fetchingSmurfs: PropTypes.bool.isRequired,
	deleteSmurf: PropTypes.func.isRequired
};

const mapStateToProps = state => {
	return {
		smurfs: state.smurfReducer.smurfs,
		fetchingSmurfs: state.smurfReducer.fetchingSmurfs
	};
};

export default connect(mapStateToProps, { getSmurfs, deleteSmurf })(SmurfsListView);
