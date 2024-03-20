import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home"; // TEMPORAIRE (Normalement, l'application s'ouvre sur la map ou la connexion si pas déjà connecté )
import Place from "./pages/Place";
import Signin from "./pages/Signin";
import Login from "./pages/Login";
// import Error from "./pages/Error";


const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,	// TEMPORAIRE (normalement Place)
	},
	{
		path: "/place",
		element: <Place />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/signin",
		element: <Signin />,
	},
	
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);