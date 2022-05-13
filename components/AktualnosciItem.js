import Link from 'next/link';

export default function Aktualnosci() {
	return (
		<>
			<section className="content-wrapper content-wrapper--center">

				<div className="aktualnosci-wrapper">

					<strong><h2>Aktualności</h2></strong>

					<h5>Drodzy Rodzice / Opiekunowie, Przyjaciele naszej szkoły!</h5>

					<br />

					<p>
						Z dniem <strong>30 kwietnia</strong> rozpoczęliśmy zapisy uczniów na rok szkolny <strong>2022/2023</strong>. <Link href='/zapisy'><a className="link">Formularz rejestracyjny</a></Link> jest dostępny na stronie internetowej naszej szkoły. Prosimy o przekazanie informacji o zapisach rodzinie i znajomym pragnącym zapisać dziecko/dzieci do naszej szkoły.
					</p>

					<br />

					<p>
						Pytania dotyczące zapisów prosimy kierować na adres email: <span><a href="mailto:szkolajezykapolskiegoslough@gmail.com?subject=Formularz rejestracyjny" className="link">szkolajezykapolskiegoslough@gmail.com</a></span>. Nasz szkolny numer telefonu jest również do Państwa dyspozycji od <strong>poniedziałku</strong> do <strong>piątku</strong> w godz. od <strong>17:30-20:00</strong>. Zapraszamy serdecznie!
					</p>

				</div>

			</section>
		</>
	)
}
