import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';

const DEFAULT_FORMFIELDS = {
	email: '',
	password: '',
};

const LogIn = () => {
	const [formFields, setFormFields] = useState(DEFAULT_FORMFIELDS);
	const { login, isLoading, error } = useLogin();
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
		await login(email, password);
	};

	return (
		<form className='login' onSubmit={submitHandler}>
			<h3>Log in</h3>
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
			<button type='submit' disabled={isLoading}>
				Log in
			</button>
			{error && <div className='error'>{error}</div>}
		</form>
	);
};

export default LogIn;
