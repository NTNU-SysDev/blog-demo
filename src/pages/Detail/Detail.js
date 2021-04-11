import React from "react";
import { useParams } from "react-router-dom";

import { blogPosts } from "../../posts";

export default function Detail() {
	const [post, setPost] = React.useState(null);

	let { id } = useParams();

	React.useEffect(() => {
		const foundPost = blogPosts.find((item) => item.id === parseInt(id));
		setPost(foundPost);
	}, [id]);

	return post ? (
		<div className="container w-50 mx-auto mt-4">
			<div className="row g-0 overflow-hidden flex-md-row mb-4 h-md-250 position-relative card-hover">
				<div className="col p-4 d-flex flex-column position-static">
					<strong className="d-inline-block mb-2 text-primary">{post.tagline}</strong>
					<h3 className="mb-0">{post.title}</h3>
					<p className="card-text mb-auto mt-2">{post.shortText}</p>
					<div className="text-muted">{post.date}</div>
				</div>
				{post.thumbnail ? (
					<div className="col-auto d-none d-lg-block">
						<img src={post.thumbnail} alt="thumbnail" />
					</div>
				) : null}
			</div>
			{/* Full text */}
			<section>
					<h3 className="pb-4 mb-4 fst-italic border-bottom">Full Text</h3>
					{post.fullText}
			</section>
		</div>
	) : null;
}
