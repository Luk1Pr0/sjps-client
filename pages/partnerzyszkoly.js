import Head from 'next/head';

// LOGOS
import LogoEdukator from '../public/partnerzy-szkoly/logo-edukator.jpg';
import LogoEveryBounceCounts from '../public/partnerzy-szkoly/logo-everybouncecounts.png';
import LogoLasuch from '../public/partnerzy-szkoly/logo-lasuch.png';
import LogoMyQueen from '../public/partnerzy-szkoly/logo-myqueen.jpg';
import LogoOrpeg from '../public/partnerzy-szkoly/logo-orpeg.png';
import LogoPes from '../public/partnerzy-szkoly/logo-pes.jpg';
import LogoPolfolkUk from '../public/partnerzy-szkoly/logo-polfolkuk.jpg';
import LogoAmbasada from '../public/partnerzy-szkoly/logo-polska-ambasada-londyn.jpg';
import LogoVc from '../public/partnerzy-szkoly/logo-vc.png';

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
						<img src={LogoEdukator.src} alt="Logo of edukator" className="img" />
					</div>

					<div className="grid-img">
						<img src={LogoEveryBounceCounts.src} alt="Logo of Every Bounce Counts" className="img" />
					</div>

					<div className="grid-img">
						<img src={LogoLasuch.src} alt="Logo of Lasuch" className="img" />
					</div>

					<div className="grid-img">
						<img src={LogoMyQueen.src} alt="Logo of My Queen" className="img" />
					</div>

					<div className="grid-img">
						<img src={LogoOrpeg.src} alt="Logo of Orpeg" className="img" />
					</div>

					<div className="grid-img">
						<img src={LogoPes.src} alt="Logo of PES" className="img" />
					</div>

					<div className="grid-img">
						<img src={LogoPolfolkUk.src} alt="Logo of PolFolkUk" className="img" />
					</div>

					<div className="grid-img">
						<img src={LogoAmbasada.src} alt="Logo of Polish Ambassay London" className="img" />
					</div>

					<div className="grid-img">
						<img src={LogoVc.src} alt="Logo of VC" className="img" />
					</div>

				</section>

			</main>

		</>
	)
}
