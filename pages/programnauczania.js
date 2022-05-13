import Head from 'next/head';
import Link from 'next/link';

export default function ProgramNauczania() {
	return (
		<>
			<Head>

				<title>SJPS | Program nauczania</title>

				<meta name="description" content="Poza krajem dorasta i uczy sie w miejscowych szkołach wiele polskich dzieci, dlatego nasz program nauczania pomaga im kultywowac tradycje oraz język." />

				<meta property="og:title" content="SJPS | Program nauczania" />

				<meta property="og:description" content="Poza krajem dorasta i uczy sie w miejscowych szkołach wiele polskich dzieci, dlatego nasz program nauczania pomaga im kultywowac tradycje oraz język." />

				<meta property="og:url" content="https://szkolajezykapolskiegoslough.org/programnauczania" />

			</Head>

			<header className="header header--program-nauczania">

				<aside className="heading-wrapper">
					<h1>
						Program nauczania
					</h1>
				</aside>

			</header>

			<main className="main main--program-nauczania">

				<section className="content-wrapper content-wrapper--center">

					<h2>Program Nauczania</h2>

					<p>
						Poza krajem dorasta i uczy się w miejscowych szkołach wiele polskich dzieci. Część uczniów oraz ich rodziny, zachowując szacunek wobec kultury i tradycji kraju zamieszkania, pragnie utrwalać, poszerzać i doskonalić znajomość języka polskiego oraz kultury polskiej. Zadanie to ułatwiają im szkoły polonijne, funkcjonujące w wielu krajach.
					</p>

					<br />

					<p>
						Z myślą o nauczycielach i uczniach tych szkół Ministerstwo Edukacji Narodowej Rzeczypospolitej Polskiej w 2010 r. przygotowało Podstawę programową dla uczniów polskich uczących się za granicą. Wersja Podstawy programowej z 2020 r. jest drugim tego rodzaju dokumentem powstałym na gruncie polskiej edukacji. Jest propozycją dla tych nauczycieli z polskich szkół i polskich ośrodków edukacyjnych działających za granicą, którzy chcieliby w szerszym zakresie uczyć polskie dzieci ich ojczystego języka, literatury, historii, geografii i kultury Polski.
					</p>

					<br />

					<p>
						Podstawa programowa dla uczniów polskich uczących się za granicą z 2020 r. zawiera uwspółcześnione treści kształcenia językowego, literackiego, kulturowego. Podstawa zbudowana jest tak, by pokazać, co uczeń powinien wiedzieć i umieć na zakończenie danego etapu kształcenia: edukacji wczesnoszkolnej, szkoły podstawowej, liceum. Zasadniczą kompetencją na każdym etapie są umiejętności językowe, istotne w poznawaniu literatury, historii i kultury polskiej.
					</p>

					<br />

					<a href='dokumenty/podstawa-programowa.pdf' className='link' id='podstawaprogramowa' target='_blank'>
						Podstawa programowa <em>(Otwiera w nowej karcie)</em>
					</a>

				</section>

			</main>

		</>
	)
}
