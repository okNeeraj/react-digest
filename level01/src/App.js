
const Button = () => {
	return (
		<div className="p-4 flex-1 w-64 rounded-lg flex items-center justify-center bg-pink-500 shadow-lg text-white">Click Here</div>
	)
}

const App = () => {
  return (
	<div className="container mx-auto p-4">
		<Button />
	</div>
  );
};

export default App;
