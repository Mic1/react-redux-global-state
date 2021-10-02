// import { useEffect, useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../appflags/appflagsSlice";

import { MenuIcon } from "@heroicons/react/solid";

import Breakpoints from "./Breakpoints";

import ButtonBar from "./ButtonBar";

function Header({ children }) {
	console.log("Render Header: ");
	const dispatch = useDispatch();

	const toggleHandler = () => {
		dispatch(toggleMenu());
	};

	return (
		<div className="sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-gray-800">
			<div className="flex -mt-6">
				<span className=" text-red-500 font-semibold">A</span>
				<span className=" text-green-500  font-semibold">B</span>
				<span className=" text-blue-500  font-semibold">C</span>
			</div>

			<ButtonBar />

			<Breakpoints />
			<MenuIcon
				onClick={toggleHandler}
				className="w-5 h-5 text-white sm:hidden"
			/>

			{children}
		</div>
	);
}

export default Header;
