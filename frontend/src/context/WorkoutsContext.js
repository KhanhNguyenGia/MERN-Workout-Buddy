import { createContext, useReducer } from 'react';

export const WorkoutsContext = createContext();

export const WORKOUT_ACTION_TYPES = {
	SET_WORKOUT: 'SET_WORKOUT',
	CREATE_WORKOUT: 'CREATE_WORKOUT',
	DELETE_WORKOUT: 'DELETE_WORKOUT',
};

export const workoutsReducer = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case WORKOUT_ACTION_TYPES.SET_WORKOUT:
			return {
				workouts: payload,
			};
		case WORKOUT_ACTION_TYPES.CREATE_WORKOUT:
			return {
				workouts: [payload, ...state.workouts],
			};
		case WORKOUT_ACTION_TYPES.DELETE_WORKOUT:
			return {
				workouts: state.workouts.filter((workout) => workout._id !== payload._id),
			};
		default:
			return state;
	}
};

export const WorkoutsContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(workoutsReducer, {
		workouts: null,
	});
	return (
		<WorkoutsContext.Provider value={{ ...state, dispatch }}>{children}</WorkoutsContext.Provider>
	);
};
