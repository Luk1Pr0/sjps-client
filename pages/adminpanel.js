import { useContext } from "react";

// CONTEXT
import { AuthContext } from '../context/AuthContext/AuthContext';

export default function AdminPanel(props) {

	const { account } = useContext(AuthContext);

	console.log(account);

	return (

		account ? (

			<main className="main">

				<section className="content-wrapper content-wrapper--center">

					<h2>Admin Panel </h2>

				</section>

			</main>
		) :
			<main className="main">

				<section className="content-wrapper content-wrapper--center">

					<h2>Access denied</h2>

				</section >

			</main>
	)
}