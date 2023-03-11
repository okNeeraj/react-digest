import {useState, useEffect} from 'react'
import axios from 'axios'

const buttonStyle = "px-5 py-2 flex-1 rounded mb-1 mr-2 items-center justify-center bg-pink-500 shadow-lg text-white";

function UseEffectHooksFetchData() {
	const [posts, setPosts] = useState([]);
	const [limit, setLimit] = useState(5);

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/posts/')
			.then(res => {
				setPosts(res.data)
				console.log(res.data)
			})
			.catch(err => {
				console.log(err.message)
			})
	}, []);

	const loadMorePosts = () => {
		setLimit(prevLimit => prevLimit + 5);
	}

	return (
		<div className="border-solid border-2 border-green-400 mb-5 p-4">
			<h3 className="text-2xl mb-2">useEffect :: Fetch Data using Axios</h3>
			<ol className='list-decimal pl-10 mb-3'>
				{/* {JSON.stringify(posts)} */}
				{
					posts.map((post, index) => {
						if(index < limit) {
							return (
								<li key={post.id}>{post.title}</li>
							)
						}
					})
				}
			</ol>
			<button onClick={loadMorePosts} className={buttonStyle}>Load More</button>
		</div>
	)
}

export default UseEffectHooksFetchData