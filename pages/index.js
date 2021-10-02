import Head from "next/head";
import Comp1 from "../components/Comp1";

export default function Home() {
	console.log("render HomePage");
	return (
		<div className="flex flex-col items-center  min-h-screen py-2">
			<Head>
				<title>AntiScrabble</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div>
				<div className="mb-10 font-bold underline underline-thickness-thick underline-offset-medium">
					global state = redux
				</div>
				AntiScrabble(HomeScreen)
				<Comp1 />
				<p>
					browser console shows Render Layout, Header, HomePage,
					Comp1, Comp2, Comp3 which we expect
				</p>
				<p className="mt-2">
					reduce screen width to mobile - "a1" in header width display
					to get menu button
				</p>
				<p className="mt-2">
					click menu button in header to open mobile sidebar
				</p>
				<p className="mt-2">
					console shows Layout, Header, VertButtonBar which we expect
				</p>
				<p className="mt-2 font-bold text-green-500 underline underline-thickness-thick underline-offset-medium">
					toggling menu button shows no excessive rerendering
				</p>
			</div>
		</div>
	);
}
