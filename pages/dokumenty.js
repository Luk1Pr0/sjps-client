import Head from 'next/head';

export default function Dokumenty() {
	return (
		<>
			<Head>

				<title>SJPS | Dokumenty</title>

				<meta name="description" content="Tutaj znajdziesz wszystkie potrzebne dokumenty." />

				<meta property="og:title" content="SJPS | Dokumenty" />

				<meta property="og:description" content="Tutaj znajdziesz wszystkie potrzebne dokumenty." />

				<meta property="og:url" content="https://szkolajezykapolskiegoslough.org/dokumenty" />

			</Head>

			<header className="header header--dokumenty">

				<aside className="heading-wrapper">
					<h1>
						Dokumenty
					</h1>
				</aside>

			</header>

			<main className="main main--dokumenty">

				<section className="content-wrapper content-wrapper--center">

					<h2>Dokumenty szkolne</h2>

				</section>

				<section className="grid-wrapper">

					<div className="grid-item">

						<a href='dokumenty/podanie-o-prace.pdf' target='_blank'>
							<h4>Podanie o prace</h4>
						</a>

					</div>

					<div className="grid-item">

						<a href='dokumenty/legitymacja-ucznia.pdf' target='_blank'>
							<h4>Legitymacja ucznia</h4>
						</a>

					</div>

					<div className="grid-item">

						<a href='dokumenty/plan-dnia.pdf' target='_blank'>
							<h4>Plan dnia</h4>
						</a>

					</div>

					<div className="grid-item">

						<a href='dokumenty/podstawa-programowa.pdf' id='podstawaprogramowa' target='_blank'>
							<h4>Podstawa programowa</h4>
						</a>

					</div>

					<div className="grid-item">

						<a href='dokumenty/regulamin-szkoly.pdf' target='_blank'>
							<h4>Regulamin szkoly</h4>
						</a>

					</div>

					<div className="grid-item">

						<a href='dokumenty/upowaznienie-do-odbioru.pdf' target='_blank'>
							<h4>Upowaznienie do odbioru</h4>
						</a>

					</div>

				</section>

			</main>
		</>
	)
}
