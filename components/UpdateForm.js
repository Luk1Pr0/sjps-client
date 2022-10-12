import { useState, useContext, useEffect, useRef } from 'react';

// CONTEXT
import { UpdateContext } from '../context/UpdateContext/UpdateContext';

import actions from '../context/actions';

// COMPONENTS
import Loader from './Loader';

export default function UpdateForm() {

	const { dispatchUpdatesEvent, updateToEdit, editUpdate } = useContext(UpdateContext);

	// REFERENCE TO UPDATE FORM
	const updateForm = useRef(null);

	// UPDATE DATA
	const [update, setUpdate] = useState({
		title: '',
		message: '',
	});

	// LOADER
	const [isLoading, setIsLoading] = useState(false);

	// HANDLE FORM SUBMIT
	const handleSubmit = async (e) => {
		e.preventDefault();

		// SHOW LOADER
		setIsLoading(true);

		// IF EDIT UPDATE IS TRUE THEN DO PUT REQ ELSE DO POST REQ
		editUpdate ?
			updateExistingUpdate()
			:
			postNewUpdate();
	}

	const postNewUpdate = async () => {

		// CREATE NEW FORM DATA
		const formData = new FormData();

		// LOOP THROUGH THE UPDATE AND APPEND EACH KEY AND RESPONDING VALUE TO THE FORM DATA
		for (let [key, value] of Object.entries(update)) {
			formData.append(key, value);
		}

		// TRY SENDING DATA
		try {
			// POST FORM DATA
			const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/aktualnosci`, {
				method: 'POST',
				mode: 'cors',
				headers: {
					'Access-Control-Allow-Origin': '*'
				},
				body: formData
			});

			// IF RESPONSE FROM THE SERVER IS OK THEN CONTINUE
			if (response.status === 200) {

				alert('Dodano aktualizacje na stronę');

				// RESET FORM VALUES
				setUpdate({ title: '', message: '' });

				// FETCH THE UPDATES AFTER ADDING THE NEW ONE
				dispatchUpdatesEvent(actions.FETCH_AGAIN, true);

				// SET CONTEXT TO STOP EDITING MODE
				dispatchUpdatesEvent(actions.EDIT_UPDATE, false);

				// RESET THE VALUES IN THE UPDATE FORM
				updateForm.current.reset();

			} else {
				alert('Aktualność z takim tytułem już istnieje, ZMIEŃ TYTUŁ');
			}

		} catch (error) {
			// CONSOLE LOG ERROR WHENS SENDING FAILS
			console.log('Error connecting to the server', error);
		}
		// HIDE LOADER
		setIsLoading(false);
	}

	const updateExistingUpdate = async () => {

		// CREATE NEW FORM DATA
		const formData = new FormData();

		// LOOP THROUGH THE UPDATE AND APPEND EACH KEY AND RESPONDING VALUE TO THE FORM DATA
		for (let [key, value] of Object.entries(update)) {
			formData.append(key, value);
		}

		try {
			// UPDATE FORM DATA
			const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/aktualnosci/${updateToEdit._id}`, {
				method: 'PUT',
				mode: 'cors',
				headers: {
					'Access-Control-Allow-Origin': '*'
				},
				body: formData
			});

			// IF RESPONSE FROM THE SERVER IS OK THEN CONTINUE
			if (response.status === 200) {

				alert('Dodano edycje stronę');

				// RESET FORM VALUES
				setUpdate({ title: '', message: '', file: null, fileUrl: '' });

				// FETCH THE UPDATES AFTER ADDING THE NEW ONE
				dispatchUpdatesEvent(actions.FETCH_AGAIN, true);

				// SET CONTEXT TO STOP EDITING MODE
				dispatchUpdatesEvent(actions.EDIT_UPDATE, false);

				// RESET THE VALUES IN THE UPDATE FORM
				updateForm.current.reset();
			} else {
				alert('Aktualność z takim tytułem już istnieje, ZMIEŃ TYTUŁ');
			}

		} catch (error) {
			// CONSOLE LOG ERROR WHENS SENDING FAILS
			console.log('Error connecting to the server', error);
		}
		// HIDE LOADER
		setIsLoading(false);
	}

	// HANDLE CHANGE OF FORM INPUTS
	const handleChange = (e) => {
		if (e.target.name === 'file') {
			// SET THE FILE
			setUpdate({ ...update, [e.target.name]: e.target.files[0] });
		} else {
			// SET THE TEXT INPUT FIELDS
			setUpdate({ ...update, [e.target.name]: e.target.value });
		}
	}

	// ON CANCEL REMOVE FORM DATA
	const handleCancel = () => {
		setUpdate({
			title: '',
			message: '',
			file: null,
			fileUrl: ''
		});

		// RESET THE VALUES IN THE UPDATE FORM
		updateForm.current.reset();

		// SET CONTEXT TO STOP EDITING MODE
		dispatchUpdatesEvent(actions.EDIT_UPDATE, false);
	}

	useEffect(() => {
		// IF EDIT UPDATE IS TRUE THEN SET THE FORM DATA TO THE CHOSEN UPDATE THAT IS TO BE EDITED
		if (editUpdate) {
			setUpdate(updateToEdit);
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [editUpdate]);

	return (
		<div className="form-wrapper">

			{isLoading && <Loader />}

			<form id='form' ref={updateForm} className="form form--login" encType="multipart/form-data" onSubmit={handleSubmit}>

				<label htmlFor="title" className='label'>
					Tytul
					<input id='title' name='title' type="text" className='input' placeholder='Tytul' onChange={handleChange} value={update.title} required />
				</label>

				<label htmlFor="message" className='label'>
					Wiadomosc
					<textarea id='message' name='message' type="text" className='textarea' placeholder='Wiadomosc' onChange={handleChange} value={update.message} />
				</label>

				<label htmlFor="file" className='label'>
					Plik
					<input id='file' name='file' type="file" className='file-input' placeholder='Plik' accept='image/*' onChange={handleChange} />
				</label>

				<div className="btn-container">

					<button type="submit">Wyślij</button>

					<button type="reset" onClick={handleCancel}>Anuluj</button>

				</div>

			</form>

		</div>
	)
}