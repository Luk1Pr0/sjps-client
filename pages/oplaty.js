import Head from 'next/head';

export default function Oplaty() {
	return (
		<>
			<Head>

				<title>SJPS | Opłaty</title>

				<meta name="description" content="Tutaj znajdziesz informacje dotyczące wszystkich opłat jakie wiążą się z posłaniem dziecka do naszej szkoły." />

				<meta property="og:title" content="SJPS | Opłaty" />

				<meta property="og:description" content="Tutaj znajdziesz informacje dotyczące wszystkich opłat jakie wiążą się z posłaniem dziecka do naszej szkoły." />

				<meta property="og:url" content="https://szkolajezykapolskiegoslough.org/oplaty" />

			</Head>

			<header className="header header--oplaty">

				<aside className="heading-wrapper">
					<h1>
						Opłaty
					</h1>
				</aside>

			</header>

			<main className="main main--oplaty">

				<section className="content-wrapper content-wrapper--center">

					<h2>Czesne i Terminy Płatności</h2>

					<div className='text--left'>
						<h4>Opłaty za szkołę w roku szkolnym 2022/23 wynoszą:</h4>
					</div>

					<br />

					<ul>

						<li>Pierwsze dziecko <strong>£295 / rok</strong>
						</li>
						<li>Drugie dziecko <strong>£250 / rok</strong>
						</li>
						<li>Trzecie i każde kolejne dziecko <strong>£200 / rok</strong>
						</li>

					</ul>

					<br />

					<p>
						Zapisując dziecko do szkoły należy wpłacić depozyt w wysokości £50 do 20 sierpnia 2022 roku, opłata za czesne będzie pomniejszona o kwotę wcześniej wpłaconego depozytu.
					</p>

					<br />

					<p>
						Warunkiem kontynuowania nauki w szkole jest uregulowanie całej kwoty za pierwsze dziecko do końca września 2022, a za drugie i trzecie dziecko do 31 października 2022. W przypadku rezygnacji ze szkoły w trakcie roku szkolnego, opłaty nie będą zwracane.
					</p>

					<br />

					<p>W przypadku jakichkolwiek wątpliwości, prosimy o kontakt na adres e-mail: <a href="mailto:szkolajezykapolskiegoslough@gmail.com?subject=Oplaty za szkole" className="link">szkolajezykapolskiegoslough@gmail.com</a></p>

					<br />

					<p><em>*Koszt podręczników szkolnych nie jest wliczany w opłatę za szkołę.</em></p>

				</section>

				<section className="content-wrapper content-wrapper--center">

					<h4 className='text--left'>DANE KONTA BANKOWEGO</h4>

					<br />

					<div className="text--left">

						<p>
							<strong>Typ konta:</strong> Business account
						</p>

						<p>
							<strong>Nazwa konta:</strong> Saint Sister Faustyna Polish Language School
						</p>

						<p>
							<strong>Numer konta:</strong> 53972341
						</p>

						<p>
							<strong>Sort code:</strong> 01 - 08 - 15
						</p>

						<br />

						<p>
							<strong>Czesne tytulem:</strong> : imię i nazwisko ucznia + aktualna klasa + czesne / depozyt (np. Anna Nowak kl.2 czesne).
						</p>

					</div>

				</section>

			</main>
		</>
	)
}
