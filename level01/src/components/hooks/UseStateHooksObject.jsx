import { useState } from "react";

const UseStateHooksObject = () => {
	const [name, setName] = useState({
		firstName: '',
		lastName: ''
	});
	return (
		<div className="border-solid border-2 border-gray-400 mb-5 p-4">
			<h3 className="text-2xl mb-2">useState :: Object {'{'} {name.firstName} {name.lastName} {'}'}</h3>
			<input type="text" onChange={e => setName({...name, firstName: e.target.value})} placeholder="First Name" className="border-solid rounded border-2 mr-2 border-black-300 px-2 py-2" />
			<input type="text" onChange={e => setName({...name, lastName: e.target.value})} placeholder="Last Name" className="border-solid rounded border-2 mr-2 border-black-300 px-2 py-2" />
			{JSON.stringify(name)}
		</div>
	);
}

export default UseStateHooksObject;
