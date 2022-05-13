import Head from 'next/head';

// COMPONENTS
import Card from '../components/Card';

// IMAGES
import DokumentyImg from '../public/index/dokumenty-img.svg';
import KalendarzImg from '../public/index/kalendarz-img.svg';
import ZapisyImg from '../public/index/zapisy-img.svg';
import Banner from '../public/index/banner.jpg';

export default function Home() {

	const cardArr = [
		{
			id: 0,
			title: 'Zapisy',
			link: '/zapisy',
			image: ZapisyImg,
			description: 'Person looking at 2 large whiteboards',
		},
		{
			id: 1,
			title: 'Dokumenty',
			link: '/dokumenty',
			image: DokumentyImg,
			description: 'Person putting away sheet of paper into a large folder',
		},
		{
			id: 2,
			title: 'Kalendarz',
			link: '/kalendarz',
			image: KalendarzImg,
			description: 'Person standing next to a large calendar',
		},
	]

	return (
		<>
			<Head>

				<title>SJPS | Szkoła Języka Polskiego w Slough</title>

				<meta property="og:title" content="SJPS | Szkoła Języka Polskiego w Slough" />

				<meta name="description" content="Nasza misja to wychowanie dzieci i młodzieży w duchu wartości chrześcijańskich oraz, kultywowanie polskiej tożsamości." />

				<meta property="og:title" content="SJPS | Szkola Jezyka Polskiego Slough" />

				<meta property="og:description" content="Nasza misja to wychowanie dzieci i młodzieży w duchu wartości chrześcijańskich oraz, kultywowanie polskiej tożsamości." />

				<meta property="og:url" content="https://szkolajezykapolskiegoslough.org" />

			</Head>

			<header className="header header--index">

				<aside className="heading-wrapper">
					<h1>
						Szkoła Języka Polskiego Im. Św. Siostry Faustyny w Slough
					</h1>
				</aside>

			</header>

			<main className='main main--index'>

				<section className="content-wrapper content-wrapper--center">

					<h4>
						Nasza misja - wychowanie dzieci i młodzieży w duchu wartości chrześcijańskich oraz, kultywowanie polskiej tożsamości a przede wszystkim nauczanie języka polskiego, historii Polskii z elementami geografii i religii. Chcemy pielęgnować polskie tradycje, obyczaje oraz piękną i bogatą kulture.
					</h4>

				</section>

				<section className="content-wrapper content-wrapper--full-width">

					<img src={Banner.src} alt="SJPS Banner with children, school slogan and school contact information" className="img img--half-width" />

				</section>

				<section className="card-wrapper">

					{
						cardArr.map(card => (
							<Card
								key={card.id}
								title={card.title}
								link={card.link}
								image={card.image}
								description={card.description}
							/>
						))
					}

				</section>

			</main>
		</>
	)
}