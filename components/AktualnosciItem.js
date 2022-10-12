import { useContext, useEffect } from 'react';
import Router from 'next/router';

// CONTEXT
import { AuthContext } from '../context/AuthContext/AuthContext';
import { UpdateContext } from '../context/UpdateContext/UpdateContext';

import actions from '../context/actions';

export default function Aktualnosci({ updateId, title, message, fileUrl, dateAdded }) {

	// ACCOUNT FROM CONTEXT
	const { account } = useContext(AuthContext);

	// UPDATE LIST FROM CONTEXT
	const { dispatchUpdatesEvent, editUpdate } = useContext(UpdateContext);

	// FORMAT THE DATE ADDED TO DISPLAY FOR EACH UPDATE
	const datePosted = dateAdded.split('T')[0].split('-').reverse().join('/');

	// DELETE THE SELECTED UPDATE FROM THE DATABASE
	const deleteUpdate = async (e) => {
		try {
			// ON CLICK DELETE THE POST WITH THE SPECIFIC ID
			const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/aktualnosci/${updateId}`, {
				method: 'DELETE',
			})

			const data = await response.json();

			// Refresh the page to remove the update from the client
			Router.push('/adminpanel');

			// FETCH THE UPDATES AFTER DELETING THE SELECTED ONE
			dispatchUpdatesEvent(actions.FETCH_AGAIN, true);

		} catch (error) {
			console.log('Error connecting to the server', error);
		}
	}

	// EDIT SELECTED UPDATE
	const handleEditUpdate = () => {

		// SET EDITING MODE TO TRUE
		dispatchUpdatesEvent(actions.EDIT_UPDATE, true);

		// IF NO UPDATE IS EDITED THEN EDIT THE SELECTED UPDATE
		if (!editUpdate) {
			// SEND THE ID OF SELECTED UPDATE TO CONTEXT IF THE UPDATE TO EDIT IS EMPTY
			dispatchUpdatesEvent(actions.UPDATE_TO_EDIT, updateId);
		} else {
			alert('Juz edytujesz, jesli chcesz zmienic, nacisnij Anuluj i wybierz nowy');
		}

		// Refresh the page to remove the update from the client
		Router.push('/adminpanel');

		// SCROLL TO TOP WHEN EDITING IN PROGRESS
		window.scrollTo(0, 0);
	}

	return (
		<>
			<article className="aktualnosci-item-wrapper">

				<br />

				<div className="content-wrapper content-wrapper--space-between content-wrapper--full-width text--left">
					<h5 className="aktualnosci--title">{title}</h5>
					<br />
					<em className="aktualnosci--date">Dodano: {datePosted}</em>
				</div>

				<br />

				<p>
					{message}
				</p>

				{
					// IF FILE IS NOT EMPTY THEN SHOW THE IMG
					fileUrl !== '' &&
					<img src={fileUrl} className='img img--aktualnosci-item' alt="Plakat promujący aktualność" />
				}

				{
					account.userRole === 'admin' && (
						<div className="btn-container">

							<button className="btn btn--primary" onClick={handleEditUpdate}>Edytuj</button>

							<button className="btn btn--danger" onClick={deleteUpdate}>Usuń post</button>
						</div>
					)
				}

			</article>
		</>
	)
}
