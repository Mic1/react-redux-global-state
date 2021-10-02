import Comp2 from "./comp2";

function Comp1() {
	console.log("Render Comp1");

	return (
		<div className="bg-purple-400 p-5">
			Comp1
			<Comp2 />
		</div>
	);
}

export default Comp1;
