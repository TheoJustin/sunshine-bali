import HomePage from "../src/pages/HomePage";
import LoginPage from "../src/pages/LoginPage";

export const RoutesList = [
    {
        name: "Login",
        path: "/login",
        element: <LoginPage />
    },
    {
        name: "Home",
        path: "/",
        element: <HomePage />
    },

]