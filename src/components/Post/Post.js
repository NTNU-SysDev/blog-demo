import { useHistory } from "react-router-dom";

export function Post({ id, tagline, title, date, description }) {
	const history = useHistory();

	function handleClick() {
		history.push(`/post/${id}`);
	}

	return (
		<article className="col-md-3">
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
			</div>
		</article>
	);
}
