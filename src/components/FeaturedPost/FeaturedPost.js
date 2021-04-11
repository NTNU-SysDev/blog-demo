import { useHistory } from "react-router-dom";
import "./FeaturedPost.styles.css";

export function FeaturedPost({ id, tagline, title, date, description, thumbnail }) {
	const history = useHistory();

	function handleClick() {
		history.push(`/post/${id}`);
	}

	return (
		<div className="col-md-6">
			<div
				onClick={handleClick}
				className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative card-hover"
			>
				<div className="col p-4 d-flex flex-column position-static">
					<strong className="d-inline-block mb-2 text-primary">{tagline}</strong>
					<h3 className="mb-0">{title}</h3>
					<div className="mb-1 text-muted">{date}</div>
					<p className="card-text mb-auto">{description}</p>
				</div>
				{thumbnail ? (
					<div className="col-auto d-none d-lg-block">
						<img src={thumbnail} alt="thumbnail" />
					</div>
				) : null}
			</div>
		</div>
	);
}
