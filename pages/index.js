import Head from 'next/head';

// COMPONENTS
import Card from '../components/Card';

// IMAGES
import DokumentyImg from '../public/index/dokumenty-img.svg';
import KalendarzImg from '../public/index/kalendarz-img.svg';
import ZapisyImg from '../public/index/zapisy-img.svg';
import IRJPImg from '../public/index/irjp.jpg';
import AktualnosciList from '../components/AktualnosciList';

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

				<section className='content-wrapper'>
					Z przyjemnoscia informujemy, że nasza szkoła Szkoła Języka Polskiego im. św.  Siostry Faustyny w Slough otrzymała za pośrednictwem Stowarzyszenia „Wspólnota Polska” dofinansowanie od Instytut Rozwoju Języka Polskiego Instytutu Rozwoju Języka Polskiego im. Św. Maksymiliana Marii Kolbego ze środków Ministra Edukacji Narodowej w ramach konkursu „Wsparcie nauczania języka polskiego za granicą poprzez dofinansowanie zakupu podręczników, sprzętu biurowego, sprzętu komputerowego oraz oprogramowania
					Nazwa zadania publicznego: Wsparcie nauczania języka polskiego za granicą szkół na terenie Wielkiej Brytanii (1)
					Kwota dotacji w 2024 r. :  33 700 PLN
					Całkowita wartość zadania publicznego:  461 833,33 PL.
					Zadanie publiczne „Wsparcie nauczania języka polskiego za granicą szkół na terenie Wielkiej Brytanii”  dotyczy dofinansowania kosztów zakupu podręczników, sprzętu biurowego, sprzętu komputerowego oraz oprogramowania.
					
					<img src={IRJPImg.src} className='img'/>

				</section>

				{/* <AktualnosciList /> */}

				<section className="content-wrapper content-wrapper--center">

					{/* <h4>
						Nasza misja - wychowanie dzieci i młodzieży w duchu wartości chrześcijańskich oraz, kultywowanie polskiej tożsamości a przede wszystkim nauczanie języka polskiego, historii Polskii z elementami geografii i religii. Chcemy pielęgnować polskie tradycje, obyczaje oraz piękną i bogatą kulture.
					</h4> */}

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