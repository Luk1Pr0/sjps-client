import Head from 'next/head';

export default function PartnerzySzkoly() {
	return (
		<>
			<Head>

				<title>SJPS | Partnerzy szkoły</title>

				<meta name="description" content="Zapraszamy organizacje oraz różne firmy do bycia sponsorem naszej szkoły." />

				<meta property="og:title" content="SJPS | Partnerzy szkoły" />

				<meta property="og:description" content="Zapraszamy organizacje oraz różne firmy do bycia sponsorem naszej szkoły." />

				<meta property="og:url" content="https://szkolajezykapolskiegoslough.org/partnerzyszkoly" />

			</Head>

			<header className="header header--partnerzy-szkoly">

				<aside className="heading-wrapper">
					<h1>
						Partnerzy Szkoły
					</h1>
				</aside>

			</header>

			<main className="main main--partnerzy-szkoly">

				<section className="content-wrapper content-wrapper--center">

					<h2>Zachęcamy wszystkie instytucje i firmy do wsparcia naszej szkoły.</h2>

				</section>

				<section className="content-wrapper content-wrapper--center grid-wrapper grid-wrapper--images">

					<div className="grid-img">
						<img src='/logo-edukator.jpg' alt="Logo of edukator" className="img" />
					</div>

					<div className="grid-img">
						<img src='logo-everybouncecounts.png' alt="Logo of Every Bounce Counts" className="img" />
					</div>

					<div className="grid-img">
						<img src='logo-lasuch.png' alt="Logo of Lasuch" className="img" />
					</div>

					<div className="grid-img">
						<img src='/logo-myqueen.jpg' alt="Logo of My Queen" className="img" />
					</div>

					<div className="grid-img">
						<img src='logo-orpeg.png' alt="Logo of Orpeg" className="img" />
					</div>

					<div className="grid-img">
						<img src='/logo-pres.jpg' alt="Logo of PES" className="img" />
					</div>

					<div className="grid-img">
						<img src='/logo-polfolkuk.jpg' alt="Logo of PolFolkUk" className="img" />
					</div>

					<div className="grid-img">
						<img src='/logo-polska-ambasada-londyn.jpg' alt="Logo of Polish Ambassay London" className="img" />
					</div>

					<div className="grid-img">
						<img src='/logo-vc.png' alt="Logo of VC" className="img" />
					</div>

				</section>

			</main>

		</>
	)
}
