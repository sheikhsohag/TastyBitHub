import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/register";
import NotFound from "../pages/utils/NotFound";
import App from "../App";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        // children: [
        //     { path: '', element: <Home /> },
        //     { path: 'about', element: <About /> },
        //     { path: 'contact', element: <Contact /> },
        // ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    { path: '*', element: <NotFound /> },
]);

export default router;