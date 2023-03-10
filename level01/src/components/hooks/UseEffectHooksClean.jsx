import {useState} from 'react';
import UseEffectHooksMouse from "./UseEffectHooksMouse";
const buttonStyle = "px-5 py-2 flex-1 w-80 rounded mb-1 mr-2 items-center justify-center bg-green-500 shadow-lg text-white";

const UseEffectHooksMouseContainer = () => {
	const [display, setDisplay] = useState(true);
	return (
		<div className="border-solid border-2 border-gray-400 mb-5 p-4">
			<h3 className="text-2xl mb-2">useEffect :: MouseEvent Container</h3>
			<button className={buttonStyle} onClick={() => setDisplay(!display)}>Toggle</button>
			{display && <UseEffectHooksMouse />}
		</div>
	);
}

export default UseEffectHooksMouseContainer;
