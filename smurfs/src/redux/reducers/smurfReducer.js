import { ADD_SMURFS, FETCHING, FAILURE, SUCCESS, ADD_SMURF } from '../actions';

const initialState = {
	smurfs: [],
	fetchingSmurfs: false,
	addingSmurf: false,
	updatingSmurf: false,
	deletingSmurf: false,
	error: null
};

export const smurfReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCHING:
			return {
				...state,
				...action.payload
			};
		case ADD_SMURF:
			return {
				...state,
				smurfs: action.payload
			};
		case ADD_SMURFS:
			return {
				...state,
				smurfs: action.payload
			};
		case SUCCESS:
			return {
				...state,
				...action.payload
			};
		case FAILURE:
			return {
				...state,
				...action.payload
			};
		default:
			return state;
	}
};
