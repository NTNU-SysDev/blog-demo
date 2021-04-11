export function Banner({header, subtext}) {
    return (
        <div className="position-relative overflow-hidden p-3 p-md-3 text-center bg-light">
			<div className="col-md-5 p-lg-3 mx-auto my-4">
				<h1 className="display-5 fw-normal">{header}</h1>
				<p className="lead fw-normal">
					{subtext}
				</p>
			</div>
		</div>
    )
}