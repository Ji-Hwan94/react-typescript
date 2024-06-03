import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../App";

const routers: RouteObject[] = [{ path: "/", element: <App /> }];

export const Routers = createBrowserRouter(routers);
