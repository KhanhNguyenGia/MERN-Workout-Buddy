import { WORKOUT_ACTION_TYPES } from '../../context/WorkoutsContext';
import { useWorkoutContext } from '../../hooks/useWorkoutContext';
import { formatDistanceToNow } from 'date-fns';
import { useAuthContext } from '../../hooks/useAuthContext';

const WorkoutDetail = ({ workout }) => {
	const { dispatch } = useWorkoutContext();
	const { user } = useAuthContext();

	const deleteHandler = async () => {
		if (!user) {
			return;
		}
		const response = await fetch(`/api/workouts/${workout._id}`, {
			method: 'DELETE',
			headers: {
				Authroization: `Bearer ${user?.token}`,
			},
		});
		const json = await response.json();

		if (response.ok) {
			dispatch({ type: WORKOUT_ACTION_TYPES.DELETE_WORKOUT, payload: json });
		}
	};
	return (
		<div className='workout-details'>
			<h4>{workout.title}</h4>
			<p>
				<strong>Load (kg): </strong>
				{workout.load}
			</p>
			<p>
				<strong>Reps: </strong>
				{workout.reps}
			</p>
			<p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
			<span className='material-symbols-outlined' onClick={deleteHandler}>
				delete
			</span>
		</div>
	);
};

export default WorkoutDetail;
