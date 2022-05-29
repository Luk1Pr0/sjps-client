import { useState, useContext, useEffect, useRef } from 'react';

// CONTEXT
import { UpdateContext } from '../context/UpdateContext/UpdateContext';

import actions from '../context/actions';

export default function UpdateForm() {

	const { dispatchUpdatesEvent, updateToEdit, editUpdate } = useContext(UpdateContext);

	// UPDATE FORM REFERENCE
	const updateForm = useRef(null);

	// UPDATE DATA
	const [update, setUpdate] = useState({
		title: '',
		message: '',
		fileUrl: '',
	});

	// HANDLE FORM SUBMIT
	const handleSubmit = async (e) => {
		e.preventDefault();

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
			const response = await fetch(`${'https://sjps-server.herokuapp.com'}/aktualnosci`, {
				method: 'POST',
				mode: 'cors',
				headers: {
					'Access-Control-Allow-Origin': '*'
				},
				body: formData
			});

			alert('Dodano aktualizacje na stronę');

			// RESET FORM VALUES
			setUpdate({ title: '', message: '', fileUrl: '' });

			// FETCH THE UPDATES AFTER ADDING THE NEW ONE
			dispatchUpdatesEvent(actions.FETCH_AGAIN, true);

			// SET CONTEXT TO STOP EDITING MODE
			dispatchUpdatesEvent(actions.EDIT_UPDATE, false);

		} catch (error) {
			// CONSOLE LOG ERROR WHENS SENDING FAILS
			console.log('Error connecting to the server', error);
		}
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
			const response = await fetch(`${'https://sjps-server.herokuapp.com'}/aktualnosci/${updateToEdit._id}`, {
				method: 'PUT',
				mode: 'cors',
				headers: {
					'Access-Control-Allow-Origin': '*'
				},
				body: formData
			});

			alert('Zmieniono akutalizacje');

			// RESET FORM VALUES
			setUpdate({ title: '', message: '', fileUrl: '' });

			// FETCH THE UPDATES AFTER ADDING THE NEW ONE
			dispatchUpdatesEvent(actions.FETCH_AGAIN, true);

			// SET CONTEXT TO STOP EDITING MODE
			dispatchUpdatesEvent(actions.EDIT_UPDATE, false);

		} catch (error) {
			// CONSOLE LOG ERROR WHENS SENDING FAILS
			console.log('Error connecting to the server', error);
		}
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