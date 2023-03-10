import { useState } from "react";

const buttonStyle = "px-5 py-2 flex-1 rounded mb-1 mr-2 items-center justify-center bg-pink-500 shadow-lg text-white";

const UseStateHooks = () => {
	const initialCount = 0
	const [count, setCount] = useState(initialCount);
	const incrementHandler = () => {
		setCount(prevCount => prevCount + 1)
	} 
	const decrementHandler = () => {
		console.log(count);
		if(count !== initialCount) {
			setCount(prevCount => prevCount - 1)
		}
	}
	const resetHandler = () => {
		setCount(prevCount => initialCount)
	}

	const incrementFiveHandler = () => {
		for(let i = 1; i <= 5; i++) {
			setCount(prevCount => prevCount + 1);
		}
	}

	return (
		<div className="border-solid border-2 border-gray-400 mb-5 p-4">
			<h3 className="text-2xl mb-2">useState :: Count {"{"} {count} {"}"}</h3>
			<button onClick={incrementHandler} className={buttonStyle}>Increment</button>
			<button onClick={decrementHandler} className={buttonStyle}>Decrement</button>
			<button onClick={resetHandler} className={buttonStyle}>Reset</button>
			<button onClick={incrementFiveHandler} className={buttonStyle}>Increment Five</button>
		</div>
	);
}

export default UseStateHooks;
