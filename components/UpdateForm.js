import { useState } from 'react';

export default function UpdateForm() {

	// LOGIN DATA
	const [update, setUpdate] = useState({
		title: '',
		message: '',
	});

	// HANDLE FORM SUBMIT
	const handleSubmit = async (e) => {
		e.preventDefault();

		// TRY SENDING DATA
		try {
			// POST FORM DATA
			const response = await fetch('https://sjps-server.herokuapp.com/aktualnosci', {
				method: 'POST',
				mode: 'cors',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(update)
			});

			alert('Dodano aktualizacje na stronę');

			setUpdate({ title: '', message: '' });

		} catch (error) {
			// CONSOLE LOG ERROR WHENS SENDING FAILS
			console.log('Error connecting to the server', error);
		}
	}

	// HANDLE CHANGE OF FORM INPUTS
	const handleChange = (e) => {
		setUpdate({ ...update, [e.target.name]: e.target.value });
	}

	return (
		<div className="form-wrapper">

			<form id='form' className="form form--login" onSubmit={handleSubmit}>

				<label htmlFor="title" className='label'>
					Tytul
					<input id='title' name='title' type="text" className='input' placeholder='Tytul' required onChange={handleChange} />
				</label>

				<label htmlFor="message" className='label'>
					Wiadomosc
					<textarea id='message' name='message' type="text" className='textarea' placeholder='Wiadomosc' required onChange={handleChange} />
				</label>

				<div className="btn-container">

					<button type="submit">Wyślij</button>

					<button type="reset">Anuluj</button>

				</div>

			</form>

		</div>
	)
}