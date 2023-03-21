import {createContext} from 'react';

import Container from "./components/Container";
import UseContextHooks from "./components/hooks/UseContextHooks";
import UseEffectHooks from "./components/hooks/UseEffectHooks";
import UseEffectHooksMouseContainer from "./components/hooks/UseEffectHooksContainer";
import UseEffectHooksFetchData from "./components/hooks/UseEffectHooksFetchData";
import UseEffectHooksInterval from "./components/hooks/UseEffectHooksInterval";
import UseEffectHooksMouse from "./components/hooks/UseEffectHooksMouse.jsx";
import UseStateHooks from "./components/hooks/UseStateHooks";
import UseStateHooksArray from "./components/hooks/UseStateHooksArray";
import UseStateHooksEvent from "./components/hooks/UseStateHooksEvent";
import UseStateHooksObject from "./components/hooks/UseStateHooksObject";

export const UserContext = createContext(null);
export const TaskContext = createContext(null);

const App = () => {
	const userValue = 'Neeraj';
	return (
		<>
			<Container>
				<h1 className="text-3xl mb-3">React Hooks</h1>
				<UserContext.Provider value={userValue}>
					<TaskContext.Provider value={'Motion Physics'}>
						<UseContextHooks />
					</TaskContext.Provider>	
				</UserContext.Provider>

				{/* useEffect */}
				<UseEffectHooksFetchData />
				<UseEffectHooksInterval />

				<UseEffectHooksMouseContainer />
				{/* <UseEffectHooksMouse /> */}
				<UseEffectHooks />

				{/* useState */}
				<UseStateHooks />
				<UseStateHooksEvent />
				<UseStateHooksObject />
				<UseStateHooksArray />
			</Container>
		</>
	);
};

export default App;
