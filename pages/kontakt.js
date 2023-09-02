import Head from 'next/head';

// COMPONENTS
import ContactForm from '../components/ContactForm';

export default function Kontakt() {
	return (
		<>
			<Head>

				<title>SJPS | Kontakt</title>

				<meta name="description" content="Skontaktuj sie z nami za pomocą formularza lub wysyłając e-mail no poniżej podany adres mailowy" />

				<meta property="og:title" content="SJPS | Kontakt" />

				<meta property="og:description" content="Skontaktuj sie z nami za pomocą formularza lub wysyłając e-mail no poniżej podany adres mailowy" />

				<meta property="og:url" content="https://szkolajezykapolskiegoslough.org/kontakt" />

			</Head>

			<header className="header header--kontakt">

				<aside className="heading-wrapper">
					<h1>
						Kontakt
					</h1>
				</aside>

			</header>

			<main className="main main--kontakt">

				<section className="content-wrapper content-wrapper--center">
					<h2>Kontakt</h2>

					<p>Prosimy o kontakt na e-mail: <span><a href="mailto:szkolajezykapolskiegoslough@gmail.com?subject=Kontakt" className="link">szkolajezykapolskiegoslough@gmail.com</a></span></p>

					<br />

					<p>Jesteśmy również dostępni pod następującym numerem telefonu: <a href='tel:+447723646812' className='link'>07723 646 812</a></p>

				</section>

				{/* <section className="content-wrapper content-wrapper--center content-wrapper--full-width">

					<ContactForm />

				</section> */}

				<section className="content-wrapper content-wrapper--center content-wrapper--full-width flex--column">

					<h3>Gdzie nas znaleźć?</h3>

					<h5>
						Znajdujemy się w Polskim kościele pod adresem:
					</h5>

					<br />

					<p>
						48 Pitts Road
						<br />
						Slough
						<br />
						SL1 3XH
						<br />
						Berkshire
					</p>

					<br />

					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5415.302791674361!2d-0.616360947606752!3d51.5145492206462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876652abcea74d3%3A0x969bd2387a2cb9c6!2sPolish%20Roman%20Catholic%20Church%20of%20Divine%20Mercy!5e0!3m2!1sen!2suk!4v1652380677157!5m2!1sen!2suk" className='iframe iframe--maps' loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

				</section>

			</main>
		</>
	)
}
