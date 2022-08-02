import { useEffect } from 'react';
import WorkoutDetail from '../components/WorkoutDetail/WorkoutDetail.component';
import WorkoutForm from '../components/WorkoutForm/WorkoutForm.component';
import { WORKOUT_ACTION_TYPES } from '../context/WorkoutsContext';
import { useWorkoutContext } from '../hooks/useWorkoutContext';

const Home = () => {
	const { workouts, dispatch } = useWorkoutContext();

	useEffect(() => {
		const fetchAllWorkouts = async () => {
			const response = await fetch('/api/workouts');
			const json = await response.json();
			if (response.ok) {
				dispatch({ type: WORKOUT_ACTION_TYPES.SET_WORKOUT, payload: json });
			}
		};
		fetchAllWorkouts();

		return () => {};
		// eslint-disable-next-line
	}, []);

	return (
		<div className='home'>
			<div className='workouts'>
				{workouts &&
					workouts.map((workout) => <WorkoutDetail key={workout._id} workout={workout} />)}
			</div>
			<WorkoutForm />
		</div>
	);
};

export default Home;
