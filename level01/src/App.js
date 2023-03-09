import Container from "./components/Container";
import UseEffectHooks from "./components/hooks/UseEffectHooks";
import UseEffectHooksMouse from "./components/hooks/UseEffectHooksMouse.jsx";
import UseStateHooks from "./components/hooks/UseStateHooks";
import UseStateHooksArray from "./components/hooks/UseStateHooksArray";
import UseStateHooksEvent from "./components/hooks/UseStateHooksEvent";
import UseStateHooksObject from "./components/hooks/UseStateHooksObject";

const App = () => {
	return (
		<>
			<Container>
				<h1 className="text-3xl mb-3">React Hooks</h1>
				<UseEffectHooksMouse />
				<UseEffectHooks />
				<UseStateHooks />
				<UseStateHooksEvent />
				<UseStateHooksObject />
				<UseStateHooksArray />
			</Container>
		</>
	);
};

export default App;
