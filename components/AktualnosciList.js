// COMPONENTS
import AktualnosciItem from "./AktualnosciItem";

export default function AktualnosciList({ posts }) {
	return (
		<section className="content-wrapper content-wrapper--center content-wrapper--column aktualnosci--list">

			<strong><h2>Aktualności</h2></strong>

			<div className="aktualnosci-list-wrapper">

				{
					(posts != null && !posts.length) ? <section className="no-posts">
						<h5><em>Brak aktualności</em></h5>
					</section>
						:
						posts.map((post) => (
							<AktualnosciItem key={post.id} title={post.title} description={post.description} imageURL={post.imageURL} createdAt={post.createdAt} />
						))
				}

			</div>

		</section>
	)
}