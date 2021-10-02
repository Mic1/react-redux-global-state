import { useState, useContext } from "react";
import Link from "next/link";

import { useSelector, useDispatch } from "react-redux";
import { toggleMenu, setCurrentLink } from "../appflags/appflagsSlice";

function VertButtonBar() {
	const [currLink, setCurrLink] = useState("TheLastWord");
	const showMenu = useSelector((state) => state.appFlags.showMenu);
	const currentLink = useSelector((state) => state.appFlags.currLink);
	const dispatch = useDispatch();

	console.log("Render VertButtonBar: ");

	const data = [
		{
			label: "AntiScrabble",
			route: "/",
			exact: "true",
			key: "0",
			txtColor: "text-green-500",
		},
		{
			label: "GameScreen",
			route: "/Game",
			key: "1",
			txtColor: "text-blue-500",
		},
		{
			label: "Settings",
			route: "/Settings",
			key: "2",
			txtColor: "text-yellow-500",
		},
	];

	const clickHandler = (e) => {
		// setCurrLink(e.target.innerText);
		dispatch(setCurrentLink(e.target.innerText));
	};

	//

	return (
		<div className={`${showMenu ? "" : "hidden"}`}>
			<div className="ml-2 mr-2">
				<ul
					className="sm:hidden justify-around bg-gray-700 rounded-md"
					onClick={clickHandler}
				>
					{data.map((item) => {
						return (
							<li
								key={item.key}
								tabIndex={item.key}
								className="p-2"
							>
								<Link href={item.route}>
									<a
										className={`${
											item.label == currentLink
												? "underline underline-thickness-thin underline-offset-medium"
												: ""
										} p-1  ${
											item.txtColor
										} font-semibold text-sm hover:underline hover:underline-style-wavy hover:underline-thickness-thin hover:underline-offset-medium`}
									>
										{item.label}
									</a>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default VertButtonBar;

// className={`w-full p-3 my-3 text-xl border-4 ${error ? "border-red-400" : ""}`}
