import { createContext, useState } from 'react';

import Router from 'next/router';

// TYPES OF ACTIONS
import actions from '../actions';

export const AuthContext = createContext();

export const AuthProvider = (props) => {

	const [account, setAccount] = useState(null);

	// OPEN OR CLOSE AND SET MODAL SOURCE
	const dispatchAuthEvent = (action, source) => {
		switch (action) {
			case actions.SIGN_IN:
				// SIGN USER IN
				console.log(source)
				Router.replace('/adminpanel');
				return setAccount(source);
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