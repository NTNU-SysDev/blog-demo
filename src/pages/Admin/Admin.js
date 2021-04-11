import { useState } from 'react';
import { blogPosts } from '../../posts';

export function Admin() {
	const [data, setData] = useState(blogPosts);

	function handleDelete(post) {
		blogPosts.splice(blogPosts.indexOf(post), 1);
		setData(data.filter(x => x.id !== post.id));
	}

	return (
		<div className="container mx-auto mt-4">
			<table className="table table-hover">
				<thead>
					<tr>
						<th scope="col">Id</th>
						<th scope="col">Title</th>
						<th scope="col">Date</th>
						<th scope="col">Delete</th>
					</tr>
				</thead>
				<tbody>
					{data.map(post => (
						<tr key={post.id}>
							<th>{post.id}</th>
							<td>{post.title}</td>
							<td>{post.date}</td>
							<td>
								<button type="button" className="btn btn-danger" onClick={() => handleDelete(post)}>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
