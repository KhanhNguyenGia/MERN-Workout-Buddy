import { useState } from 'react';
import { WORKOUT_ACTION_TYPES } from '../../context/WorkoutsContext';
import { useWorkoutContext } from '../../hooks/useWorkoutContext';

const DEFAULT_WORKOUT_DETAILS = {
	title: '',
	reps: '',
	load: '',
};

const WorkoutForm = () => {
	const [workoutDetails, setWorkoutDetails] = useState(DEFAULT_WORKOUT_DETAILS);
	const [error, setError] = useState(null);
	const { dispatch } = useWorkoutContext();
	const [emptyFields, setEmptyFields] = useState([]);

	const formChangeHandler = ({ target: { name, value } }) => {
		setWorkoutDetails({ ...workoutDetails, [name]: value });
	};

	const formSubmitHandler = async (e) => {
		e.preventDefault();

		const response = await fetch('/api/workouts', {
			method: 'POST',
			body: JSON.stringify(workoutDetails),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const json = await response.json();
		if (!response.ok) {
			setError(json.error);
			setEmptyFields(json.emptyFields);
		}
		if (response.ok) {
			setError(null);
			setEmptyFields([]);
			dispatch({ type: WORKOUT_ACTION_TYPES.CREATE_WORKOUT, payload: json });
			console.log('New workout added', json);
			setWorkoutDetails(DEFAULT_WORKOUT_DETAILS);
		}
	};

	return (
		<form className='create' onSubmit={formSubmitHandler}>
			<h3>Add a new workout</h3>
			<label>Exercise title:</label>
			<input
				type='text'
				value={workoutDetails.title}
				onChange={formChangeHandler}
				name='title'
				className={emptyFields.includes('title') ? 'error' : ''}
			/>
			<label>Load (in kg):</label>
			<input
				type='number'
				value={workoutDetails.load}
				onChange={formChangeHandler}
				name='load'
				className={emptyFields.includes('load') ? 'error' : ''}
			/>
			<label>Reps:</label>
			<input
				type='number'
				value={workoutDetails.reps}
				onChange={formChangeHandler}
				name='reps'
				className={emptyFields.includes('reps') ? 'error' : ''}
			/>
			<button type='submit'>Add Workout</button>
			{error && <div className='error'>{error}</div>}
		</form>
	);
};

export default WorkoutForm;
