import { useEffect, useState } from 'react';

// COMPONENTS
import AktualnosciItem from "./AktualnosciItem";

export default function AktualnosciList({ }) {

	const [updates, setUpdates] = useState([]);

	const getUpdates = async () => {
		try {
			// FETCH UPDATES FROM SERVER
			const response = await fetch('https://sjps-server.herokuapp.com/aktualnosci', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*'
				},
			});

			// CONVERT FROM JSON TO READABLE
			const data = await response.json();


			// SORT RETRIEVE UPDATES BY DATE DESCENDING - NEWEST FIRST
			const sortedUpdates = data.sort((a, b) => {
				return Date.parse(b.dateAdded) - Date.parse(a.dateAdded);
			})


			// SET STATE OF UPDATES
			setUpdates(sortedUpdates);

		} catch (error) {
			return 'Error fetching updates from the server';
		}
	}

	useEffect(() => {
		getUpdates();
	}, [])

	return (
		<section className="content-wrapper content-wrapper--center content-wrapper--column">

			<strong><h2>Aktualności</h2></strong>

			<div className="aktualnosci-list-wrapper">

				{
					!updates.length ?
						<h5>Brak aktualności</h5>
						:
						updates.map((update) => (
							<AktualnosciItem key={update._id} updateId={update._id} title={update.title} message={update.message} dateAdded={update.dateAdded} />
						))
				}

			</div>

		</section>
	)
}