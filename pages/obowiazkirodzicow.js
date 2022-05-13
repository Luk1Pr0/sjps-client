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
						Obowiazki rodzicow
					</h1>
				</aside>

			</header>

			<main className="main main--obowiazki-rodzicow">

				<section className="content-wrapper content-wrapper--center">

					<h2>Obowiazki rodzicow</h2>

					<div className='text--left'>
						<h4>RODZICE ZOBOWIĄZANI SĄ DO</h4>
					</div>

					<br />

					<ul>

						<li>ZAPOZNANIA SIĘ Z REGULAMINEM I STATUTEM SZKOŁY.
						</li>
						<li>REGULARNEGO I PUNKTUALNEGO POSYŁANIA DZIECI DO SZKOŁY.
						</li>
						<li>SYSTEMATYCZNEGO SPRAWDZANIA POSTĘPÓW DZIECKA W NAUCE ORAZ WSPIERANIA W RAZIE KONIECZNOŚCI W ODRABIANIU PRAC DOMOWYCH,
						</li>
						<li>UCZESTNICZENIA W ZEBRANIACH SZKOLNYCH DWA RAZY DO ROKU ORAZ W DNIU OTWARTYM NA ZAKOŃCZENIE ROKU SZKOLNEGO.
						</li>
						<li>USPRAWIEDLIWIANIA NIEOBECNOŚCI I SPÓŹNIEŃ SWOICH DZIECI.
						</li>
						<li>DOKONYWANIA OPŁAT SZKOLNYCH W WYZNACZONYM TERMINIE.
						</li>
						<li>PUNKTUALNEGO ODBIERANIA DZIECI PO ZAJĘCIACH.
						</li>

					</ul>

				</section>

			</main>

		</>
	)
}
