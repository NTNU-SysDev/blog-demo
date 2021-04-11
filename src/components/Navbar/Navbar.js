import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom"

import "./Navbar.styles.css";

export function Navbar() {
	const [search, setSearch] = useState("");
	const history = useHistory();
	
	function handleSearch() {
		if (search.trim() !== "") {
			history.push(`/search/${search}`);
		} else {
			history.push("/");
		}
	}
	
	return (
		<header className="p-3 bg-dark text-white">
			<div className="container">
				<div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

					<ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
						<li><Link to="/" className="nav-link px-2 text-secondary text-white underscore-hover">Home</Link></li>
						<li><Link to="/new-post" className="nav-link px-2 text-secondary text-white underscore-hover">New Post</Link></li>
						<li><Link to="/admin" className="nav-link px-2 text-secondary text-white underscore-hover">Admin</Link></li>
					</ul>

					<form onSubmit={(e) => e.preventDefault()} className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
						<input type="text" className="form-control form-control-dark" onChange={(e) => setSearch(e.target.value)} placeholder="Search..." />
					</form>

					<div className="text-end">
						<button type="button" className="btn btn-outline-success" onClick={handleSearch}>Search</button>
					</div>
				</div>
			</div>
		</header>
	);
}
