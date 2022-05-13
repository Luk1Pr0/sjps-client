import Head from 'next/head';

export default function NaszaKadra() {
	return (
		<>
			<Head>

				<title>SJPS | Nasza kadra</title>

				<meta name="description" content="Informacje o naszej kadrze szkolnej." />

				<meta property="og:title" content="SJPS | Nasza kadra" />

				<meta property="og:description" content="Informacje o naszej kadrze szkolnej." />

				<meta property="og:url" content="https://szkolajezykapolskiegoslough.org/naszakadra" />

			</Head>

			<header className="header header--nasza-kadra">

				<aside className="heading-wrapper">
					<h1>
						Nasza kadra
					</h1>
				</aside>

			</header>

			<main className="main main--nasza-kadra">

				<section className="content-wrapper content-wrapper--center">

					<h2>Nasza kadra</h2>

					<p>
						Nasza kadra pedagogiczna realizuje misję naszej szkoły, wprowadza dzieci w świat pełen radości i sukcesów. Wszelkimi sposobami wspomaga również uczniów w odnalezieniu w sobie polskiej tożsamości.
					</p>

					<br />

					<p>
						Mamy doświadczonych i wykwalifikowanych nauczycieli, ze specjalizacjami z literatury i gramatyki języka polskiego, historii, geografii i wychowania religijnego, którzy z oddaniem  i entuzjazmem poświęcają się  pracy wychowawczej. Wszyscy posiadają sprawdzenie kryminalne (DBS) i przeszli Child Protection Course.
					</p>

				</section>

				<section className="content-wrapper content-wrapper--center">

					<div className="text--left">
						<h4>
							Nauczyciele
						</h4>
					</div>

					<br />

					<ul>

						<li>mgr Magdalena Witkowska dyrektor ds. edukacyjnych - <em>wychowawca, założyciel szkoły</em></li>
						<li>Łukasz Jankiewicz - <em>dyrektor ds. finansowych, założyciel szkoły</em></li>
						<li>mgr Aneta Daniluk-Wałejko - <em>sekretarz - wychowawca</em></li>
						<li>mgr Anna Janikowska - <em>wychowawca</em></li>
						<li>Barbara Lewandowska - <em>nauczyciel wspomagający</em></li>
						<li>mgr Daria Jankiewicz - <em>wychowawca</em></li>
						<li>mgr Katarzyna Lenczowska-Tynor - <em>wychowawca</em></li>
						<li>mgr Nina Wągiel - <em>wychowawca</em></li>
						<li>mgr Andrzej Czapski <em>wychowawca, historia, geografia oraz religia</em></li>
						<li>Oliwia Wałejko - <em>wolontariusz</em></li>
						<li>Nicola Kowalczyk - <em>wolontariusz</em></li>

					</ul>


				</section>

			</main>
		</>
	)
}
