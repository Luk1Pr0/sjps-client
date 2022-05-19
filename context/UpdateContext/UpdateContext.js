import { createContext, useState } from 'react';

// TYPES OF ACTIONS
import actions from '../actions';

export const UpdateContext = createContext();

export const UpdateProvider = (props) => {

	// LIST OF UPDATES FORM THE DATABASE
	const [updatesList, setUpdatesList] = useState([]);

	// SELECTED UPDATE FOR EDITING
	const [selectedUpdate, setSelectedUpdate] = useState({
		title: '',
		message: '',
		file: '',
	});

	const dispatchUpdatesEvent = (action, payload) => {
		switch (action) {
			case actions.SET_UPDATES:

				// SET UPDATE LIST TO EQUAL FETCHED UPDATES FROM SERVER
				return setUpdatesList(payload);

			case actions.SELECT_UPDATE:

				// FILTER THE LIST OF UPDATES AND RETURN THE ONE THAT MATCHES THE PAYLOAD ID
				return setSelectedUpdate(updatesList.filter(update => update._id === payload)[0]);

			default:
				return;
		}
	}

	return (
		<UpdateContext.Provider value={{ dispatchUpdatesEvent, updatesList, selectedUpdate }}>
			{props.children}
		</UpdateContext.Provider>
	)
}