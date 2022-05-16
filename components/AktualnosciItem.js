import { useContext } from 'react';
import Router from 'next/router';

// CONTEXT
import { AuthContext } from '../context/AuthContext/AuthContext';

export default function Aktualnosci({ updateId, title, message, dateAdded }) {

	// ACCOUNT FROM CONTEXT
	const { account } = useContext(AuthContext);

	// FORMAT THE DATE ADDED TO DISPLAY FOR EACH UPDATE
	const datePosted = dateAdded.split('T')[0].split('-').reverse().join('/');

	const handleClick = async (e) => {
		try {
			// ON CLICK DELETE THE POST WITH THE SPECIFIC ID
			const response = await fetch(`https://sjps-server.herokuapp.com/aktualnosci/${updateId}`, {
				method: 'DELETE',
			})

			const data = await response.json();

			// Refresh the page to remove the update from the client
			Router.reload('/');

		} catch (error) {
			console.log('Error connecting to the server', error);
		}
	}

	return (
		<>
			<aside className="aktualnosci-item-wrapper">

				<br />

				<div className="content-wrapper content-wrapper--space-between">
					<h5 className="aktualnosci--title">{title}</h5>
					<em className="aktualnosci--date">Dodano: {datePosted}</em>
				</div>

				<br />

				<p>
					{message}
				</p>

				{
					account.userRole === 'admin' && (
						<div className="btn-container">
							<button className="btn btn--danger" onClick={handleClick}>Usuń post</button>
						</div>
					)
				}

			</aside>
		</>
	)
}
