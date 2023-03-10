import { useEffect } from "react";
import { useState, useRef } from "react";
import './UseStateHooks.css';

const buttonStyle = "p-4 flex-1 w-64 rounded-lg flex items-center justify-center bg-pink-500 shadow-lg text-white";

const UseStateHooks = () => {
	// const [count, setCount] = useState(0)
	// setTimeout(() => {
	// 	setCount(count+1)
	// }, 3000))

	const url = 'http://localhost:3001/ghost/api/v3/content/posts/?key=e411c1cefcd50b86cc2ef48284';

	const [postsData, setPosts] = useState([]);
	const dataFetchedRef = useRef(false);

	const fetchData = async () => {
		try {
			let data = await fetch(url)
			return data.json()
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		if (dataFetchedRef.current) return;
		console.log('called once.')
		dataFetchedRef.current = true;
		setInterval(() => {
			fetchData().then((data) => setPosts(data.posts));
		}, 1500)
	}, [])

	return (
		<>
			{/* <button classNameName={buttonStyle}>
				Clicked {0} Times
			</button>
			<ul>
			
				<li key={idx}>{post.title}</li>
			))}
			</ul> */}

			<div className="container mt-5 mb-5">
				<div className="row d-flex align-items-center justify-content-center">
					<div className="col-md-6">
						{postsData.map((post, idx) => (
							<>
								<div key={idx} dangerouslySetInnerHTML={{ __html: post.html }} />
								<hr />
							</>

						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default UseStateHooks;
