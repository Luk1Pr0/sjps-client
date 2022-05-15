import { useEffect } from "react";

export default function AdminPanel(props) {

	useEffect(() => {
		console.log(props);
	}, []);

	return (

		<main className="main">

			<section className="content-wrapper content-wrapper--center">

				<h2>Admin Panel </h2>

			</section>

		</main>

	)
}