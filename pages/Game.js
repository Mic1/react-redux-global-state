import { useDispatch } from "react-redux";
import { testRenderer } from "../features/appflags/appflagsSlice";

function Game() {
	console.log("Render GameScreen");
	const dispatch = useDispatch();

	const callDispatch = () => {
		console.log("callDispatch");
		dispatch(testRenderer());
	};

	return (
		<div className="flex h-screen w-full py-2 bg-red-300">
			<main className="flex w-full px-20 text-center bg-blue-300">
				<div className="min-w-full mt-2">
					GameScreen
					<button
						className="bg-indigo-500 border-2"
						onClick={callDispatch}
					>
						Call dispatch ...
					</button>
				</div>
			</main>
		</div>
	);
}

export default Game;
