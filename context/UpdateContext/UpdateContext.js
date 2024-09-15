import { createContext, useState } from 'react';

// TYPES OF ACTIONS
import actions from '../actions';

export const UpdateContext = createContext();

export const UpdateProvider = (props) => {

	// LIST OF UPDATES FORM THE DATABASE
	const [updatesList, setUpdatesList] = useState([]);

	// FETCH UPDATES AGAIN
	const [fetchAgain, setFetchAgain] = useState(false);

	const dispatchUpdatesEvent = (action, payload) => {

		switch (action) {
			case actions.SET_UPDATES:
				// SET UPDATE LIST TO EQUAL FETCHED UPDATES FROM SERVER
				return setUpdatesList(payload);

			case actions.FETCH_AGAIN:
				// FETCH THE UPDATES AGAIN
				return setFetchAgain(payload);

			default:
				return;
		}
	}

	return (
		<UpdateContext.Provider value={{ dispatchUpdatesEvent, updatesList }}>
			{props.children}
		</UpdateContext.Provider>
	)
}