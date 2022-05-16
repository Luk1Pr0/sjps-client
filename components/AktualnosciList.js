import { useEffect, useState } from 'react';

// COMPONENTS
import AktualnosciItem from "./AktualnosciItem";

export default function AktualnosciList({ }) {

	const [updates, setUpdates] = useState([]);

	const getUpdates = async () => {
		try {
			// FETCH UPDATES FROM SERVER
			const response = await fetch('https://sjps-server.herokuapp.com/aktualnosci');

			// CONVERT FROM JSON TO READABLE
			const data = await response.json();

			// SET STATE OF UPDATES
			setUpdates(data);
		} catch (error) {
			return console.log('Error fetching updates', error);
		}
	}

	useEffect(() => {
		getUpdates();
	}, [])

	// console.log(aktualnosci);
	return (
		<section className="content-wrapper content-wrapper--center content-wrapper--full-width content-wrapper--column">

			<strong><h2>Aktualności</h2></strong>

			<div className="content-wrapper--column-reverse aktualnosci-list-wrapper">
				{
					!updates.length ?
						<h5>Brak aktualnosci</h5>
						:
						updates.map((update) => (
							<AktualnosciItem key={update._id} updateId={update._id} title={update.title} message={update.message} dateAdded={update.dateAdded} />
						))
				}
			</div>

		</section>
	)
}