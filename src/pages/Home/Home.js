import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Banner } from "../../components/Banner/Banner";
import { FeaturedPost } from "../../components/FeaturedPost/FeaturedPost";
import { Post } from "../../components/Post/Post";

// Data
import { blogPosts } from "../../posts";

export function Home() {
	const [search, setSearch] = useState("");
	const [posts, setPosts] = useState([]);
	const [featuredPosts, setFeaturedPosts] = useState([]);

	const { searchQuery } = useParams();

	useEffect(() => {
		let localPosts = [];
		let localFeaturedPosts = [];

		if (searchQuery) {
			const filteredList = blogPosts.filter((post) => post.title.toLowerCase().includes(searchQuery.toLowerCase()) && !post.featured);
			setPosts(filteredList);
		} else {
			blogPosts.forEach((post) => {
				if (post.featured) {
					localFeaturedPosts.push(post);
				} else {
					localPosts.push(post);
				}
				setPosts(localPosts);
				setFeaturedPosts(localFeaturedPosts);
			});
		}
	}, [searchQuery]);

	function filterPosts() {
		const filteredList = blogPosts.filter((post) => post.title.toLowerCase().includes(search.toLowerCase()) && !post.featured);
		setPosts(filteredList);
	}

	return (
		<>
			{/* Header element */}
			<Banner header="React blog demo" subtext="Demo for the course: Web Technology (NTNU)" />

			{/* Featured post section */}
			<section className="container mx-auto mt-4">
				<div className="row mb-2">
					{featuredPosts.map((post) => (
						<FeaturedPost
							key={post.id}
							id={post.id}
							tagline={post.tagline}
							title={post.title}
							date={post.date}
							description={post.shortText}
							thumbnail={post.thumbnail}
						/>
					))}
				</div>
			</section>

			{/* Regular post section */}
			<section className="container mx-auto mt-4">
				<div className="row">
					<h3 className="pb-4 mb-4 fst-italic border-bottom">Blog posts</h3>
					<form className="d-flex flex-row" onSubmit={(e) => e.preventDefault()}>
						<input
							type="search"
							className="form-control form-control-dark"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							placeholder="Search..."
						/>
						<button onClick={filterPosts} type="button" className="btn btn-primary ms-4">
							Search
						</button>
					</form>
				</div>
			</section>

			{/* Blog posts */}
			<section className="container mx-auto mt-4">
				<div className="row">
					{posts.slice(0).reverse().map((post) => (
						<Post
							key={post.id}
							id={post.id}
							tagline={post.tagline}
							title={post.title}
							date={post.date}
							description={post.shortText}
						/>
					))}
				</div>
			</section>
		</>
	);
}
