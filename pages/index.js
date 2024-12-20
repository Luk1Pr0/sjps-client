import Head from 'next/head';

// COMPONENTS
import Card from '../components/Card';
import AktualnosciList from '../components/AktualnosciList.js';

// IMAGES
import DokumentyImg from '../public/index/dokumenty-img.svg';
import KalendarzImg from '../public/index/kalendarz-img.svg';
import ZapisyImg from '../public/index/zapisy-img.svg';

export async function getServerSideProps() {
	let sortedPosts = {};

	try {
		// FETCH UPDATES FROM SERVER
		const response = await fetch(`${process.env.STRAPI_SERVER}/api/posts`, {
			method: 'GET',
			headers: {
				// 'Access-Control-Allow-Origin': '*',
				'Authorization': `bearer ${process.env.STRAPI_API_TOKEN}`
			},
		});

		// CONVERT FROM JSON TO READABLE
		const postsData = await response.json();

		// SORT RETRIEVE UPDATES BY DATE DESCENDING - NEWEST FIRST
		sortedPosts = postsData.data.sort((a, b) => {
			return (b.id) - (a.id);
		})
	}
	catch (error) {
		console.log(error);
	}
	
	return {
		props: { sortedPosts }
	}
}


export default function Home({ sortedPosts }) {
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

				<AktualnosciList posts={sortedPosts} />

				{/* <section className="content-wrapper content-wrapper--center">

					<h4>
						Nasza misja - wychowanie dzieci i młodzieży w duchu wartości chrześcijańskich oraz, kultywowanie polskiej tożsamości a przede wszystkim nauczanie języka polskiego, historii Polskii z elementami geografii i religii. Chcemy pielęgnować polskie tradycje, obyczaje oraz piękną i bogatą kulture.
					</h4>

				</section> */}

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