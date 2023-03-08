import { useState } from "react";
const buttonStyle = "px-5 py-2 flex-1 rounded mb-1 mr-2 items-center justify-center bg-pink-500 shadow-lg text-white";

const UseStateHooksArray = () => {
	const [items, setItems] = useState([]);

	const addItem = () => {
		setItems([...items, {
			id: items.length,
			value: Math.floor(Math.random() * 10) + 1
		}])
	}

	return (
		<div className="border-solid border-2 border-gray-400 mb-5 p-4">
			<h3 className="text-2xl mb-2">
				useState :: Array 
				{'['}
					{
						items.map(item => (
							<span className="p-2 m-1 bg-gray-100 border-solid border-1 border-black-100 text-sm" key={item.id}>{item.value}</span>
						))
					} 
				{']'}
			</h3>
			<button onClick={addItem} className={buttonStyle}>Add Random Item</button>
		</div>
	);
}

export default UseStateHooksArray;
