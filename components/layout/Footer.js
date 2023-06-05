import Link from "next/link";

export default function Footer() {
	return (
		<footer className='footer'>

			<h3 className="footer-heading footer-heading--blurb">Szkoła Języka Polskiego Slough</h3>

			<p className="footer-content footer-content--blurb">
				Głównym zalożeniem szkoły jest nauczanie języka polskiego, geografii i historii Polski oraz nauczanie wiary zgodnie z założeniem kościoła katolickiego. Nauczanie dzieci i młodzieży w duchu patriotyzmu oraz moralności i kultury osobistej.
			</p>

			<h6 className="footer-heading footer-heading--copyright">
				© {new Date().getFullYear()} Szkoła Języka Polskiego Slough
			</h6>

			<h3 className="footer-heading footer-heading--more">Więcej</h3>

			<ul className="footer-content footer-content--more">

				<Link href='/'>
					<li>

						<a>Strona główna</a>

					</li>
				</Link>

				<Link href='/dlaczegonaszaszkola'>
					<li>

						<a>Dlaczego nasza szkoła</a>

					</li>
				</Link>

				<Link href='/onas'>

					<li>

						<a>O nas</a>

					</li>

				</Link>

				<Link href='/kalendarz'>

					<li>

						<a>Kalendarz</a>

					</li>

				</Link>


				<Link href='/misja'>
					<li>

						<a>Misja</a>

					</li>
				</Link>

				<Link href='/wizja'>
					<li>

						<a>Wizja</a>

					</li>
				</Link>

				<Link href='/patron'>
					<li>

						<a>Patron</a>

					</li>
				</Link>

				<Link href='/programnauczania'>
					<li>

						<a>Program nauczania</a>

					</li>
				</Link>

				<Link href='/naszakadra'>
					<li>

						<a>Nasza kadra</a>

					</li>
				</Link>

				<Link href='/szkolneprojekty'>
					<li>

						<a>Szkolne projekty</a>

					</li>
				</Link>

				<Link href='/partnerzyszkoly'>
					<li>

						<a>Partnerzy szkoly</a>

					</li>
				</Link>

				<Link href='/kodeksucznia'>
					<li>

						<a>Kodeks ucznia</a>

					</li>
				</Link>

				<Link href='/dekalogucznia'>
					<li>

						<a>Dekalog ucznia</a>

					</li>
				</Link>

				<Link href='/podreczniki'>
					<li>

						<a>Podręczniki</a>

					</li>
				</Link>

				<Link href='/obowiazkirodzicow'>
					<li>

						<a>Obowiązki rodziców</a>

					</li>
				</Link>

				<Link href='/zapisy'>
					<li>

						<a>Zapisy</a>

					</li>
				</Link>


				<Link href='/oplaty'>
					<li>

						<a>Opłaty</a>

					</li>
				</Link>

				<Link href='/bezpieczenstwodzieci'>
					<li>

						<a>Bezpieczeństwo dzieci</a>

					</li>
				</Link>

				<Link href='/dokumenty'>
					<li>

						<a>Dokumenty</a>

					</li>
				</Link>

				<Link href='/kontakt'>
					<li>

						<a>Kontakt</a>

					</li>
				</Link>

			</ul>

			<h3 className="footer-heading footer-heading--social-media">Media Społecznościowe</h3>

			<ul className="footer-content footer-content--social-media">

				<li>

					<Link href='https://www.facebook.com/Szko%C5%82a-J%C4%99zyka-Polskiego-im-%C5%9Bw-Siostry-Faustyny-w-Slough-106881168296298'>
						<a target='_blank'>Facebook</a>
					</Link>

				</li>

				<li>

					<Link href='https://www.youtube.com/channel/UCa3_qpK2ESrujZNJccd3XUQ'>
						<a target='_blank'>YouTube</a>
					</Link>

				</li>

			</ul>

			<h6 className="footer-heading footer-heading--creator">

				<a href="mailto:lpytel16@gmail.com?subject=Website creation">
					Created by Lukasz Pytel
				</a>

			</h6>

		</footer >
	)
}