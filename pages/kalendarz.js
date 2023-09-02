import { useContext } from 'react';

import Head from 'next/head';
import Image from 'next/image';

// CONTEXT AND ACTIONS
import { ModalContext } from '../context/ModalContext/ModalContext';
import actions from '../context/actions';

// UTILS
import returnYearAsString from '../utils/returnYearAsString';

// COMPONENTS
import ImageModal from '../components/ImageModal';

// IMAGES
import Kalendarz1 from '../public/kalendarz/calendar-1.jpg';
import Kalendarz2 from '../public/kalendarz/calendar-1.jpg';

export default function Kalendarz() {

	const { modalSource, dispatchModalEvent } = useContext(ModalContext);

	// HANDLE CLICK
	const handleClick = (e) => {
		const selectedImage = e.target.src;
		dispatchModalEvent(actions.OPEN_MODAL, selectedImage);
	}

	console.log(returnYearAsString());

	return (
		<>
			<Head>

				<title> SJPS | Kalendarz</title>

				<meta name="description" content="Kalendarz szkolny na lata 2022/23 znajdziesz na poniższych zdjęciach" />

				<meta property="og:title" content="SJPS | Kalendarz" />

				<meta property="og:description" content="Kalendarz szkolny na lata 2022/23 znajdziesz na poniższych zdjęciach" />

				<meta property="og:url" content="https://szkolajezykapolskiegoslough.org/kalendarz" />

			</Head>

			<header className="header header--kalendarz">

				<aside className="heading-wrapper">
					<h1>
						Kalendarz
					</h1>
				</aside>

			</header>

			<main className="main main--kalendarz">

				<section className="content-wrapper content-wrapper--center">

					<h2>KALENDARZ {returnYearAsString()}</h2>

					<p>
						Zajęcia w roku szkolnym <strong>{returnYearAsString()} </strong> rozpoczynamy <strong> 9 września 2023 r. </strong>
						Zajęcia na grupę poranną rozpoczynają się o godz. <strong>8:50</strong>, a kończą o <strong>12:20</strong>. W nowym roku szkolnym mamy 35 sobót. Kalendarz na rok szkolny {returnYearAsString()} zamieszczamy poniżej.

					</p>

				</section>

				<section className="content-wrapper content-wrapper--center content-wrapper--full-width">

					<div className="img-container img-container--kalendarz" onClick={handleClick}>
						<img src={Kalendarz1.src} alt='Zdjecie kalendarza na lata 2022/23 - 1' className="img clickable" />
					</div>

					<div className="img-container img-container--kalendarz" onClick={handleClick}>
						<img src={Kalendarz2.src} alt="Zdjecie kalendarza na lata 2022/23 - 2" className="img clickable" />
					</div>

				</section>

			</main>

			{
				// IF IMAGE IS CLICKED ON, SHOW MODAL
				modalSource !== null ? <ImageModal image={modalSource} /> : null
			}

		</>
	)
}
