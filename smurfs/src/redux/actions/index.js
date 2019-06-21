import axios from 'axios';

// Set default endpoint url
const BASE_URL = 'http://localhost:3333';

// Declare action types
export const ADD_SMURF = 'ADD_SMURF';
export const ADD_SMURFS = 'ADD_SMURFS';
export const GET_SMURF = 'GET_SMURF';
export const UPDATE_SMURF = 'UPDATE_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';
export const FETCHING = 'FETCHING';
export const CREATING = 'CREATING';
export const UPDATING = 'UPDATING';
export const DELETING = 'DELETING';
export const FAILURE = 'FAILURE';
export const SUCCESS = 'SUCCESS';
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

// Get all from smurfs
export const getSmurfs = () => dispatch => {
	dispatch({ type: FETCHING, payload: { fetchingSmurfs: true } });

	axios
		.get(`${BASE_URL}/smurfs`)
		.then(res => {
			dispatch({ type: SUCCESS, payload: { fetchingSmurfs: false } });
			dispatch({ type: ADD_SMURFS, payload: res.data });
		})
		.catch(err => {
			dispatch({ type: FAILURE, payload: { error: err.message, fetchingSmurfs: false } });
		});
};

// Add smurf
export const addSmurf = newSmurf => dispatch => {
	dispatch({ type: CREATING, payload: { addingSmurf: true } });

	return axios
		.post(`${BASE_URL}/smurfs`, newSmurf)
		.then(res => {
			dispatch({ type: SUCCESS, payload: { addingSmurf: false } });
			dispatch({ type: ADD_SMURF, payload: res.data });
		})
		.catch(err => {
			dispatch({ type: FAILURE, payload: { error: err.message, addingSmurf: false } });
		});
};

// Delete smurf
export const deleteSmurf = id => dispatch => {
	dispatch({ type: DELETING, payload: { deletingSmurf: true } });

	return axios
		.delete(`${BASE_URL}/smurfs/${id}`)
		.then(res => {
			dispatch({ type: SUCCESS, payload: { deletingSmurf: false } });
			dispatch({ type: ADD_SMURFS, payload: res.data });
		})
		.catch(err => {
			dispatch({ type: FAILURE, payload: { error: err.message, deletingSmurf: false } });
		});
};
