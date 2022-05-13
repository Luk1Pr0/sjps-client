import Head from 'next/head';

export default function ObowiazkiRodzicow() {
	return (
		<>
			<Head>

				<title>SJPS | Obowiązki rodzicow</title>

				<meta name="description" content="Obowiązki rodzicow dotyczą wszystkich tych, których dzieci uczęszczają do naszej szkoły." />

				<meta property="og:title" content="SJPS | Obowiązki rodzicow" />

				<meta property="og:description" content="Obowiązki rodzicow dotyczą wszystkich tych, których dzieci uczęszczają do naszej szkoły." />

				<meta property="og:url" content="https://szkolajezykapolskiegoslough.org/obowiazkirodzicow" />

			</Head>

			<header className="header header--obowiazki-rodzicow">

				<aside className="heading-wrapper">
					<h1>
						Obowiązki rodzicow
					</h1>
				</aside>

			</header>

			<main className="main main--obowiazki-rodzicow">

				<section className="content-wrapper content-wrapper--center">

					<h2>Obowiązki rodziców</h2>

					<div className='text--left'>
						<h4>Rodzice zobowiązani są do:</h4>
					</div>

					<br />

					<ul>

						<li>zapoznania się z Regulaminem i Statutem  Szkoły.
						</li>
						<li>regularnego i punktualnego posyłania dzieci do szkoły.
						</li>
						<li>systematycznego sprawdzania postępów dziecka w nauce oraz wspierania w razie konieczności w odrabianiu prac domowych.
						</li>
						<li>uczestniczenia w zebraniach szkolnych dwa razy do roku oraz w dniu otwartym na zakończenie roku szkolnego.
						</li>
						<li>usprawiedliwiania nieobecności i spóźnień swoich dzieci.
						</li>
						<li>dokonywania opłat szkolnych w wyznaczonym terminie.
						</li>
						<li>punktualnego odbierania dzieci po zajęciach.
						</li>

					</ul>

				</section>

			</main>

		</>
	)
}
