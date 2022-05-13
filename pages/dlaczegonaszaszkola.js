import Head from 'next/head';

export default function DlaczegoNaszaSzkola() {
	return (
		<>
			<Head>

				<title>SJPS | Dlaczego nasza szkoła</title>

				<meta name="description" content="Dlaczego wybrać naszą szkołe? Powodów jest wiele, sprawdź je tutaj." />

				<meta property="og:title" content="SJPS | Dlaczego nasza szkola" />

				<meta property="og:description" content="Dlaczego wybrać naszą szkołe? Powodów jest wiele, sprawdź je tutaj." />

				<meta property="og:url" content="https://szkolajezykapolskiegoslough.org/dlaczegonaszaszkola" />

			</Head>

			<header className="header header--dlaczego-nasza-szkola">

				<aside className="heading-wrapper">
					<h1>
						Dlaczego nasza szkoła
					</h1>
				</aside>

			</header>

			<main className="main main--dlaczego-nasza-szkola">

				<section className='content-wrapper content-wrapper--center'>

					<h2>Dlaczego nasza szkoła?</h2>

					<ol>

						<li>
							Przyjmujemy dzieci od 5 roku życia. Maluchy najszybciej uczą się kilku języków na raz.
						</li>

						<li>
							Zapewniamy dzieciom bezpieczeństwo i atmosferę pełna akceptacji.
						</li>

						<li>
							Pracujemy przez 35 sobót w roku szkolnym zapewniając 3,5 godziny  nauki w każdą sobotę. Po zajęciach zapewniamy świetlice dla dzieci i kluby pozalekcyjne.
						</li>

						<li>
							Mamy wspaniała kadrę a nasi nauczyciele ciągle się szkolą i dostosowują program nauczania do poziomu uczniów.
						</li>

						<li>
							Jesteśmy organizacją non-profit. Wszelkie dodatkowo pozyskane środki zostaną przeznaczone na rozwój i działalność szkoły.
						</li>

					</ol>

				</section>

			</main>
		</>
	)
}
