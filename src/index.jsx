// import * as React from "react";
// import * as ReactDOM from "react-dom/client";
// import {
// 	createBrowserRouter,
// 	RouterProvider,
// } from "react-router-dom";

// import Place from "./pages/Place";

// const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <Place />,
// 	},
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
// 	<React.StrictMode>
// 		<RouterProvider router={router} />
// 	</React.StrictMode>
// );



import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home"; // TEMPORAIRE (Normalement, l'application s'ouvre sur la map ou la connexion si pas déjà connecté )
import Signin from "./pages/Signin";
import Login from "./pages/Login";
import GlobalPage from "./pages/GlobalPage";
import Place from "./pages/Place";
import Subscribe from "./pages/Subscribe"
import AddCamera from "./pages/AddCamera";
import ChooseCamera from "./pages/ChooseCamera";
import FavoriteCamera from "./pages/FavoriteCamera";
// import Error from "./pages/Error";



type CustomRouteConfig = RouteObject & { permission: string[] }
const routeConfig: CustomRouteConfig[] = [
	{
		path: "/",
		element: <Home />,	// TEMPORAIRE (normalement Place)
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/signin",
		element: <Signin />,
	},
	{
		path: "/globalPage",		// On utilise CET url avec en param un autre page. Cela permet d'avoir 
		element: <GlobalPage />,	// Url exemple : http://localhost:3000/globalPage?page=Place
		permission: ['page'],
	},
	{
		path: "/place",
		element: <Place />,
	},
	{
		path: "/AddCamera",
		element: <AddCamera />,
	},
	{
		path: "/Subscribe",
		element: <Subscribe />,
	},
	{
		path: "/ChooseCamera",
		element: <ChooseCamera />,
	},
	{
		path: "/FavoriteCamera",
		element: <FavoriteCamera />,
	},
];


const router = createBrowserRouter(routeConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);