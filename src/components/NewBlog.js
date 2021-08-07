import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function NewBlog() {
	const [title, setTitle] = useState('');

	const [userId, setUserId] = useState('');
	const [body, setBody] = useState('');

	const history = useHistory();

	const addPost = (e) => {
		e.preventDefault();

		const newPost = { title, userId, body };

		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(newPost),
		})
			.then((response) => response.json())
			.then((json) => {
				console.log(json);
				alert('Added');
				history.push('/');
			});
	};
	return (
		<div className="add-post">
			<h2>New Blog</h2>

			<form onSubmit={addPost}>
				<label>Your Blog Title</label>
				<input
					type="text"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>

				<label>The Writer</label>
				<input
					type="text"
					value={userId}
					onChange={(e) => setUserId(e.target.value)}
				/>

				<label>Content</label>
				<textarea
					type="text"
					value={body}
					onChange={(e) => setBody(e.target.value)}
				/>

				<button>Publish</button>
			</form>
		</div>
	);
}

export default NewBlog;