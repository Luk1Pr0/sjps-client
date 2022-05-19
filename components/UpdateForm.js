import { useState, useContext, useEffect } from 'react';

// CONTEXT
import { UpdateContext } from '../context/UpdateContext/UpdateContext';

// SERVERS
const productionServer = 'https://sjps-server.herokuapp.com';
const developmentServer = 'http://localhost:5000';

export default function UpdateForm() {

	// LOGIN DATA
	const [update, setUpdate] = useState({
		title: '',
		message: '',
		file: '',
	});

	// UPDATE LIST CONTEXT
	const { selectedUpdate } = useContext(UpdateContext);

	// HANDLE FORM SUBMIT
	const handleSubmit = async (e) => {
		e.preventDefault();

		// TRY SENDING DATA
		try {
			// POST FORM DATA
			const response = await fetch(`${developmentServer}/aktualnosci`, {
				method: 'POST',
				mode: 'cors',
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*'
				},
				body: JSON.stringify(update)
			});

			alert('Dodano aktualizacje na stronę');

			setUpdate({ title: '', message: '', file: '' });

		} catch (error) {
			// CONSOLE LOG ERROR WHENS SENDING FAILS
			console.log('Error connecting to the server', error);
		}
	}

	// HANDLE CHANGE OF FORM INPUTS
	const handleChange = (e) => {
		setUpdate({ ...update, [e.target.name]: e.target.value });
	}

	useEffect(() => {
		// setUpdate(selectedUpdate);
		console.log('selected update', selectedUpdate);
	}, []);

	return (
		<div className="form-wrapper">

			<form id='form' className="form form--login" encType="multipart/form-data" onSubmit={handleSubmit}>

				<label htmlFor="title" className='label'>
					Tytul
					<input id='title' name='title' type="text" className='input' placeholder='Tytul' onChange={handleChange} value={update.title} required />
				</label>

				<label htmlFor="message" className='label'>
					Wiadomosc
					<textarea id='message' name='message' type="text" className='textarea' placeholder='Wiadomosc' onChange={handleChange} value={update.message} />
				</label>

				<label htmlFor="file" className='label'>
					Zalacznik
					<input id='file' name='file' type="file" className='file-input' placeholder='Plik' accept='image/*, .pdf' onChange={handleChange} value={update.file} />
				</label>

				<div className="btn-container">

					<button type="submit">Wyślij</button>

					<button type="reset">Anuluj</button>

				</div>

			</form>

		</div>
	)
}