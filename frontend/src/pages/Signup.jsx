import { useState } from 'react';
import { useSignup } from '../hooks/useSignup';

const DEFAULT_FORMFIELDS = {
	email: '',
	password: '',
};

const SignUp = () => {
	const [formFields, setFormFields] = useState(DEFAULT_FORMFIELDS);
	const { signup, error, isLoading } = useSignup();
	const { email, password } = formFields;

	const formChangeHandler = (e) => {
		const { name, value } = e.target;
		setFormFields({
			...formFields,
			[name]: value,
		});
	};

	const submitHandler = async (e) => {
		e.preventDefault();
		await signup(email, password);
	};

	return (
		<form className='signup' onSubmit={submitHandler}>
			<h3>Sign up</h3>
			<label>Email:</label>
			<input
				type='email'
				onChange={formChangeHandler}
				name='email'
				value={email}
				disabled={isLoading}
			/>
			<label>Password:</label>
			<input
				type='password'
				onChange={formChangeHandler}
				name='password'
				value={password}
				disabled={isLoading}
			/>
			<button disabled={isLoading} type='submit'>
				Sign up
			</button>
			{error && <div className='error'>{error}</div>}
		</form>
	);
};

export default SignUp;
