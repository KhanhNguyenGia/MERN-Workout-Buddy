import { WorkoutsContext } from '../context/WorkoutsContext';
import { useContext } from 'react';

export const useWorkoutContext = () => {
	const context = useContext(WorkoutsContext);

	if (!context) throw Error('useWorkoutContext must be used inside a WorkoutContextProvider');

	return context;
};
