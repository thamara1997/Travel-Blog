import Card from './Card';
import useFetch from './useFetch';
import { Link } from 'react-router-dom';

function Home() {
	const { data: posts } = useFetch(
		'https://jsonplaceholder.typicode.com/posts'
	);
	console.log(posts);

	return (
		
		<div className="posts-list">
			<div className="hero">
				<h1>Publish Your Passions,Your Way</h1>
				<h4>Create a Unique and Beautiful Blog</h4>
				
				<Link to="/create"><button>Get Start</button></Link>
			</div>
			<div className="posts-container">
				{posts ? (
					posts.map((post) => <Card data={post} key={post.id} />)
				) : (
					<p>Loading..</p>
				)}
			</div>
		</div>
	);
}

export default Home;