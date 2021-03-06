import Head from 'next/head';
import Link from 'next/link';

export default function SzkolneProjekty() {
	return (
		<>
			<Head>

				<title>SJPS | Szkolne projekty</title>

				<meta name="description" content="Szkolne projekty w które bedzie angażowac sie nasza szkoła w nowym roku szkolnym." />

				<meta property="og:title" content="SJPS | Szkolne projekty" />

				<meta property="og:description" content="Szkolne projekty w które bedzie angażowac sie nasza szkoła w nowym roku szkolnym." />

				<meta property="og:url" content="https://szkolajezykapolskiegoslough.org/szkolneprojekty" />

			</Head>

			<header className="header header--szkolne-projekty">

				<aside className="heading-wrapper">
					<h1>
						Szkolne projekty
					</h1>
				</aside>

			</header>

			<main className="main main--szkolne-projekty">

				<section className="content-wrapper content-wrapper--center">

					<h2>Szkolne Projekty</h2>

					<h4>W nowym roku szkolnym nasza szkoła będzie zaangażowana w następujące projekty szkolne:</h4>

					<br />

					<ul>
						<li>Międzynarodowy projekt edukacyjny wspierający rozwój czytelnictwa w klasach I-III &quot;,Czytam z klasą lekturki spod chmurki&quot;</li>
					</ul>

					<br />

					<Link href={'https://www.niezbedniknauczyciela.com/czytam-z-klas%C4%85-edycja-3'}>
						<a className="link" target='blank'>Link do projektu <em>(Otwiera w nowej karcie)</em></a>
					</Link>

				</section>

			</main>

		</>
	)
}
