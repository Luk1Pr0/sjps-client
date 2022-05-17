import { createContext, useState } from 'react';

import Router from 'next/router';

// TYPES OF ACTIONS
import actions from '../actions';

export const AuthContext = createContext();

export const AuthProvider = (props) => {

	const [account, setAccount] = useState({ email: '', userRole: '' });

	// OPEN OR CLOSE AND SET MODAL SOURCE
	const dispatchAuthEvent = (action, admin) => {
		switch (action) {
			case actions.SIGN_IN:
				// REDIRECT USER TO ADMINPANEL
				Router.replace('/adminpanel');
				// SIGN USER IN
				return setAccount(admin);
			case actions.SIGN_OUT:
				// SIGN USER OUT
				return setAccount(source);
			default:
				return;
		}
	}

	return (
		<AuthContext.Provider value={{ dispatchAuthEvent, account }}>
			{props.children}
		</AuthContext.Provider>
	)
}