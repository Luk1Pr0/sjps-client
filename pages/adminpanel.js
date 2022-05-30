import { useContext, useRef, useEffect } from "react";
import Link from 'next/link';

// COMPONENTS
import AktualnosciList from "../components/AktualnosciList";
import UpdateForm from "../components/UpdateForm";

// CONTEXT
import { AuthContext } from '../context/AuthContext/AuthContext';

export default function AdminPanel() {

	const { account } = useContext(AuthContext);

	return (

		account.userRole === 'admin' ? (

			<main className="main">

				<h2>Admin Panel </h2>

				<section className="content-wrapper content-wrapper--center content-wrapper--full-width">

					<UpdateForm />

				</section>

				<section className="content-wrapper content-wrapper--center content-wrapper--full-width">

					<AktualnosciList />

				</section>

			</main>
		) :
			<main className="main">

				<section className="content-wrapper content-wrapper--center">

					<h2>Access denied</h2>

					<Link href='/login'>

						<button className="btn btn--primary">
							<a>Zaloguj się</a>

						</button>

					</Link>

				</section >

			</main >
	)
}