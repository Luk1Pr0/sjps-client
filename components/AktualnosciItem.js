import { useContext } from 'react';


// CONTEXT
import { AuthContext } from '../context/AuthContext/AuthContext';

export default function Aktualnosci({ id, title, description, imageURL, createdAt }) {

	// ACCOUNT FROM CONTEXT
	const { account } = useContext(AuthContext);

	// FORMAT THE DATE ADDED TO DISPLAY FOR EACH UPDATE
	const datePosted = createdAt.split('T')[0].split('-').reverse().join('/');

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
					{description}
				</p>

				{
					// IF FILE IS NOT EMPTY THEN SHOW THE IMG
					imageURL !== null &&
					<img src={imageURL} className='img img--aktualnosci-item' alt="Plakat promujący aktualność" />
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
