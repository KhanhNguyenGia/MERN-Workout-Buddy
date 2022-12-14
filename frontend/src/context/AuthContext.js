import { createContext, useEffect, useReducer } from 'react';

export const AuthContext = createContext();

export const AUTH_ACTION_TYPES = {
	LOGIN: 'AUTH/LOGIN',
	LOGOUT: 'AUTH/LOGOUT',
};

const authReducer = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case AUTH_ACTION_TYPES.LOGIN:
			return {
				user: payload,
			};
		case AUTH_ACTION_TYPES.LOGOUT:
			return {
				user: null,
			};
		default:
			return state;
	}
};

export const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, {
		user: null,
	});
	useEffect(() => {
		const user = JSON.parse(localStorage.getItem('user'));
		if (user) dispatch({ type: AUTH_ACTION_TYPES.LOGIN, payload: user });
	}, []);

	return <AuthContext.Provider value={{ ...state, dispatch }}>{children}</AuthContext.Provider>;
};
