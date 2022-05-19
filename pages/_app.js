import Head from 'next/head';
import '../styles/globals.scss';

// CONTEXT
import { ModalProvider } from '../context/ModalContext/ModalContext';
import { AuthProvider } from '../context/AuthContext/AuthContext';
import { UpdateProvider } from '../context/UpdateContext/UpdateContext';

// COMPONENTS
import Nav from '../components/layout/Nav';
import Footer from '../components/layout/Footer';

// FAVICON
import Favicon from '../public/favicon.png';

// COVER IMAGE
import CoverImage from '../public/cover-image.png';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<ModalProvider>

				<AuthProvider>

					<UpdateProvider>

						<Head>

							<title>SJPS | Szkola Jezyka Polskiego Slough</title>

							<link rel="icon" type="image/png" href={Favicon.src} />

							<meta name="author" content="Lukasz Pytel" />

							<meta name='keywords' content='szkoła, polska, slough, nauka, edukacja, polonia, historia, uk, wielka brytania, emigracja, imigracja, pomoc, zapisy, religia, kościół' />

							<meta property="og:image" content={CoverImage.src} />

						</Head>

						<Nav />

						<Component {...pageProps} />

						<Footer />

					</UpdateProvider>

				</AuthProvider>

			</ModalProvider>
		</>
	)
}

export default MyApp;
