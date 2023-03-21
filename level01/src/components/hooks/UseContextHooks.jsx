import { useContext } from "react";
import { UserContext, TaskContext } from "../../App";

const UseContextHooks = () => {
	const user = useContext(UserContext);
	const task = useContext(TaskContext)
	return (
		<div className="border-solid border-2 border-blue-400 mb-5 p-4">
			<h3 className="text-2xl mb-2">useContext :: Access data to nested component using Context APIs</h3>
			<div className="mb-2">
				<code className="bg-gray-200 p-2 text-sm">{user}</code> is working on <code className="bg-gray-200 p-2 text-sm">{task}</code>
			</div>
		</div>
	)
}

export default UseContextHooks;
