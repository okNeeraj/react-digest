import { useState } from "react";
import { useEffect } from "react";
const buttonStyle = "px-5 py-2 flex-1 rounded mb-1 mr-2 items-center justify-center bg-blue-500 shadow-lg text-white";

const UseEffectHooks = (props) => {
	const [resourceType, setResourceType] = useState('users');
	const [items, setItems] = useState([]);

	const resourceTypeHandler = (type) => {
		setResourceType(type)
	}

	useEffect( () => {
		fetch(`https://jsonplaceholder.typicode.com/${resourceType}/1`)
			.then(response => response.json())
			.then(json => setItems(json))
		return () => {

		}
	}, [resourceType])

	return (
		<div className="border-solid border-2 border-gray-400 mb-5 p-4">
			<h3 className="text-2xl mb-2">useEffect :: Fetch Data on tab change using fetch</h3>
			{/* <input type="text" placeholder="First Name" className="border-solid rounded border-2 mr-2 border-black-300 px-2 py-2" /> */}
			<button onClick={ () => resourceTypeHandler('users')} className={buttonStyle}>Users</button>
			<button onClick={ () => resourceTypeHandler('posts')} className={buttonStyle}>Posts</button>
			<button onClick={ () => resourceTypeHandler('comments')} className={buttonStyle}>Comments</button>

			<h3 className="text-2xl mb-2">{resourceType}</h3>
			{JSON.stringify(items)}
			{/* {
				items.map(item => {
					return <pre>{JSON.stringify(item)}</pre>
				})
			} */}
		</div>
	);
}

export default UseEffectHooks;
