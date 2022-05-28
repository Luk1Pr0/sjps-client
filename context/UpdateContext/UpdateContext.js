import { createContext, useState } from 'react';

// TYPES OF ACTIONS
import actions from '../actions';

export const UpdateContext = createContext();

export const UpdateProvider = (props) => {

	// LIST OF UPDATES FORM THE DATABASE
	const [updatesList, setUpdatesList] = useState([]);

	// UPDATE THAT NEEDS TO BE EDITED 
	const [updateToEdit, setUpdateToEdit] = useState({ title: '', message: '', filePath: '' });

	// FETCH UPDATES AGAIN
	const [fetchAgain, setFetchAgain] = useState(false);

	// UPDATE IS BEING EDITED STATE
	const [editUpdate, setEditUpdate] = useState(false);

	const dispatchUpdatesEvent = (action, payload) => {

		switch (action) {
			case actions.SET_UPDATES:
				// SET UPDATE LIST TO EQUAL FETCHED UPDATES FROM SERVER
				return setUpdatesList(payload);

			case actions.FETCH_AGAIN:
				// FETCH THE UPDATES AGAIN
				return setFetchAgain(payload);

			case actions.EDIT_UPDATE:
				// TOGGLE UPDATE TO EDIT
				return setEditUpdate(payload);

			case actions.UPDATE_TO_EDIT:
				// SET THE SELECTED UPDATE THAT NEED TO BE EDITED
				setUpdateToEdit(updatesList.filter(update => update._id === payload)[0]);

			default:
				return;
		}
	}

	return (
		<UpdateContext.Provider value={{ dispatchUpdatesEvent, updatesList, fetchAgain, editUpdate, updateToEdit }}>
			{props.children}
		</UpdateContext.Provider>
	)
}