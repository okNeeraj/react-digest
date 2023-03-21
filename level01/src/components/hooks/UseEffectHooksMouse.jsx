import { useState, useEffect } from "react";
const buttonStyle = "px-5 py-2 flex-1 w-80 rounded mb-1 mr-2 items-center justify-center bg-blue-500 shadow-lg text-white";

const UseEffectHooksMouse = () => {
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);

	const logMousePosition = (e) => {
		setX(e.clientX);
		setY(e.clientY);
	}
	
	useEffect( () => {
		window.addEventListener('mousemove', logMousePosition);
		return () => {
			window.removeEventListener('mousemove', logMousePosition)
		}
	}, [])

	return (
		<div className="border-solid border-2 border-green-400 mb-5 p-4">
			<h3 className="text-2xl mb-2">useEffect :: MouseEvent</h3>
			<button className={buttonStyle}>Mouse X = {x}</button>
			<button className={buttonStyle}>Mouse Y = {y}</button>
		</div>
	);
}

export default UseEffectHooksMouse;
