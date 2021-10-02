import { Fragment, useState } from "react";

import Head from "next/head";
import Header from "./header/Header";
import VertButtonBar from "./header/VertButtonBar";
import { useSelector } from "react-redux";

const Layout = (props) => {
	console.log("Render Layout: ");
	const showMenu = useSelector((state) => state.appFlags.showMenu);

	return (
		<Fragment>
			<Head>
				<title>AntiScrabble</title>
				<meta charSet="utf-8"></meta>
				<link
					href="https://fonts.googleapis.com/icon?family=Material+Icons"
					rel="stylesheet"
				/>
			</Head>

			<div>
				<Header />
				<div className="flex bg-yellow-200">
					<div className="w-full">{props.children}</div>
					<div
						className={`${
							showMenu ? "" : " w-0"
						} flex bg-gray-800 transition-width transition-slowest ease`}
					>
						<VertButtonBar />
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Layout;
