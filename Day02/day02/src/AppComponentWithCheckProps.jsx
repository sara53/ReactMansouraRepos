import CheckInteraction from "./components/CheckInteraction";
import { CheckProps } from "./components/CheckProps";

function App() {
	let myCount;
	let title = "Salma"
	const getCountData = ( x ) => {
		myCount = x;
		console.log( myCount )
	};
	return (
		<>

			<CheckInteraction title={title} getCountData={getCountData} />
			<h2 className="mt-3 text-muted">Count From Check is :{myCount} </h2>
		</>
	);
}

export default App;
