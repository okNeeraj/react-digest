import { useState } from "react";

const UseStateHooksEvent = () => {
	const [input, setInput] = useState();
	const inputHandler = (e) => {
		console.log(e)
		setInput(e)
	}

	return (
		<div className="border-solid border-2 border-gray-400 mb-5 p-4">
			<h3 className="text-2xl mb-2">useState :: Input event {'{'} {input} {'}'}</h3>
			<input type="text" onChange={e => inputHandler(e.target.value)} className="border-solid rounded border-2 border-gray-200 px-2 py-2" />
		</div>
	);
}

export default UseStateHooksEvent;
