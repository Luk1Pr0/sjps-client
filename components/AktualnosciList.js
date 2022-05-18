import { useEffect, useState } from 'react';

// COMPONENTS
import AktualnosciItem from "./AktualnosciItem";
import Loader from '../components/Loader';

export default function AktualnosciList({ }) {

	// STATE
	const [updates, setUpdates] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	// FETCH UPDATES FROM THE SERVER
	const getUpdates = async () => {
		setIsLoading(true);
		try {
			// SHOW LOADER

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
		// SHOW LOADER
		setIsLoading(false);
	}

	// ON RENDER
	useEffect(() => {
		getUpdates();
	}, [])

	return (
		<section className="content-wrapper content-wrapper--center content-wrapper--column">

			<strong><h2>Aktualności</h2></strong>

			<div className="aktualnosci-list-wrapper">

				{/* WHEN CONTENT IS LOADING SHOW LOADER */}
				{isLoading && <Loader />}

				{
					!updates.length ?
						<section className="content-wrapper content-wrapper--half-screen">
							<h5>Brak aktualności</h5>
						</section>
						:
						updates.map((update) => (
							<AktualnosciItem key={update._id} updateId={update._id} title={update.title} message={update.message} dateAdded={update.dateAdded} />
						))

				}

			</div>

		</section>
	)
}