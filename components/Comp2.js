import Comp3 from "./Comp3";

export default function Comp2() {
	console.log("Render Comp2");
	return (
		<div className="bg-pink-400 p-5">
			Comp2
			<Comp3 />
		</div>
	);
}
