import Head from 'next/head';

export default function Zapisy() {
	return (
		<>
			<Head>

				<title>SJPS | Zapisy</title>

				<meta name="description" content="Formularz rejestracyjny dla uczniów, można pobrać na tej stronie, wypełnic, oraz odesłać na nasz email podany poniżej." />

				<meta property="og:title" content="SJPS | Zapisy" />

				<meta property="og:description" content="Formularz rejestracyjny dla uczniów, można pobrać na tej stronie, wypełnic, oraz odesłać na nasz email podany poniżej." />

				<meta property="og:url" content="https://szkolajezykapolskiegoslough.org/zapisy" />

			</Head>

			<header className="header header--zapisy">

				<aside className="heading-wrapper">
					<h1>
						Zapisy
					</h1>
				</aside>

			</header>

			<main className="main main--zapisy">

				<section className="content-wrapper content-wrapper--center">

					<h2>Zapisz dziecko</h2>

					<p>
						Jeśli chcą Państwo zapisać swoje dziecko do naszej szkoły, serdecznie prosimy o wydrukowanie poniższego formularza, wypełnienie go oraz wysłanie na nasz e-mail: <span><a href="mailto:szkolajezykapolskiegoslough@gmail.com?subject=Zapisy do polskiej szkoly" className="link">szkolajezykapolskiegoslough@gmail.com</a></span>
					</p>

				</section>

				<section className="content-wrapper content-wrapper--center">

					<p className="text--center">
						<a className="link" href="./dokumenty/formularz-rejestracyjny.pdf" target='_blank'>Formularz rejestracyjny <em>(Otwiera w nowej karcie)</em></a>
					</p>

				</section>

			</main>

		</>
	)
}
