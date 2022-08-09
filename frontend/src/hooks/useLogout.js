import { AUTH_ACTION_TYPES } from '../context/AuthContext';
import { WORKOUT_ACTION_TYPES } from '../context/WorkoutsContext';
import { useAuthContext } from './useAuthContext';
import { useWorkoutContext } from './useWorkoutContext';

export const useLogout = () => {
	const { dispatch } = useAuthContext();
	const { dispatch: workoutDispatch } = useWorkoutContext();
	const logout = () => {
		localStorage.removeItem('user');
		dispatch({ type: AUTH_ACTION_TYPES.LOGOUT });
		workoutDispatch({ type: WORKOUT_ACTION_TYPES.SET_WORKOUT, payload: null });
	};
	return { logout };
};
