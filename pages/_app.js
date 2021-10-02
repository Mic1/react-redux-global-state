import "tailwindcss/tailwind.css";

import { Provider } from "react-redux";

import Layout from "../features/Layout";

import store from "../app/store";

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
}

export default MyApp;
