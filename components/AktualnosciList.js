import { useEffect, useState, useContext } from 'react';

// CONTEXT
import { UpdateContext } from '../context/UpdateContext/UpdateContext';

// COMPONENTS
import AktualnosciItem from "./AktualnosciItem";
import Loader from '../components/Loader';
import actions from '../context/actions';

export default function AktualnosciList({ }) {

	// STATE
	const [isLoading, setIsLoading] = useState(false);

	// CONTEXT
	const { dispatchUpdatesEvent, updatesList, fetchAgain } = useContext(UpdateContext);

	// FETCH UPDATES FROM THE SERVER
	const getUpdates = async () => {

		// SHOW LOADER
		setIsLoading(true);

		try {

			// FETCH UPDATES FROM SERVER
			const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/aktualnosci`, {
				method: 'GET',
				headers: {
					'Access-Control-Allow-Origin': '*'
				},
			});

			// CONVERT FROM JSON TO READABLE
			const data = await response.json();

			// SORT RETRIEVE UPDATES BY DATE DESCENDING - NEWEST FIRST
			const sortedUpdates = data.sort((a, b) => {
				return Date.parse(b.dateAdded) - Date.parse(a.dateAdded);
			})

			// SET STATE OF UPDATES LIST
			dispatchUpdatesEvent(actions.SET_UPDATES, sortedUpdates);

		} catch (error) {
			return 'Error fetching updates from the server';
		}

		// SHOW LOADER
		setIsLoading(false);

		// STOP FETCHING AGAIN AFTER FETCH HAS COMPLETED
		dispatchUpdatesEvent(actions.FETCH_AGAIN, false);
	}

	// ON RENDER
	useEffect(() => {
		getUpdates();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	// ON CONTEXT CHANGE
	useEffect(() => {
		// IF FETCH AGAIN IS TRUE THEN FETCH UPDATES
		fetchAgain && getUpdates();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [fetchAgain])

	return (
		<section className="content-wrapper content-wrapper--center content-wrapper--column">

			<strong><h2>Aktualności</h2></strong>

			<div className="aktualnosci-list-wrapper">

				{/* WHEN CONTENT IS LOADING SHOW LOADER */}
				{isLoading && <Loader />}

				{
					!updatesList.length ?
						<section className="content-wrapper content-wrapper--half-screen">
							<h5>Brak aktualności</h5>
						</section>
						:
						updatesList.map((update) => (
							<AktualnosciItem key={update._id} updateId={update._id} title={update.title} message={update.message} fileUrl={update.fileUrl} dateAdded={update.dateAdded} />
						))
				}

			</div>

		</section>
	)
}