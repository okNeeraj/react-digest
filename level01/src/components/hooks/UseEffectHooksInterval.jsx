import {useState, useEffect} from 'react';
const buttonStyle = "px-5 py-2 flex-1 w-40 rounded mb-1 mr-2 items-center justify-center bg-blue-500 shadow-lg text-white";

const UseEffectHooksInterval = () => {
	const [count, setCount] = useState(0);

	const tick = () => {
		setCount(prevCount => prevCount + 1);
	}
 	useEffect(() => {
		const interval = setInterval(tick, 1000);
		return (() => {
			clearInterval(interval)
		})
	}, [count]);

	return (
		<div className="border-solid border-2 border-green-400 mb-5 p-4">
			<h3 className="text-2xl mb-2">useEffect :: Interval</h3>
			<button className={buttonStyle}>{count}</button>
		</div>
	);
}

export default UseEffectHooksInterval;
