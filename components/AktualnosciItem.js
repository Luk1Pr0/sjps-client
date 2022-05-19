import { useContext } from 'react';
import Router from 'next/router';

// CONTEXT
import { AuthContext } from '../context/AuthContext/AuthContext';
import { UpdateContext } from '../context/UpdateContext/UpdateContext';

import actions from '../context/actions';

// SERVERS
const productionServer = 'https://sjps-server.herokuapp.com';
const developmentServer = 'http://localhost:5000';

export default function Aktualnosci({ updateId, title, message, dateAdded }) {

	// ACCOUNT FROM CONTEXT
	const { account } = useContext(AuthContext);

	// UPDATE LIST CONTEXT
	const { dispatchUpdatesEvent } = useContext(UpdateContext);

	// FORMAT THE DATE ADDED TO DISPLAY FOR EACH UPDATE
	const datePosted = dateAdded.split('T')[0].split('-').reverse().join('/');

	// DELETE THE SELECTED UPDATE FROM THE DATABASE
	const deleteUpdate = async (e) => {
		try {
			// ON CLICK DELETE THE POST WITH THE SPECIFIC ID
			const response = await fetch(`${developmentServer}/aktualnosci/${updateId}`, {
				method: 'DELETE',
			})

			const data = await response.json();

			// Refresh the page to remove the update from the client
			Router.reload('/');

		} catch (error) {
			console.log('Error connecting to the server', error);
		}
	}

	const editUpdate = () => {
		dispatchUpdatesEvent(actions.SELECT_UPDATE, updateId);
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
					account.userRole === 'admin' && (
						<div className="btn-container">
							<button className="btn btn--primary" onClick={editUpdate}>Edytuj</button>

							{/* <button className="btn btn--danger" onClick={deleteUpdate}>Usuń post</button> */}
						</div>
					)
				}

			</article>
		</>
	)
}
