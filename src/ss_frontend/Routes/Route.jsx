import HomePage from "../src/pages/HomePage";
import ProfilePage from "../src/pages/ProfilePage";

export const RoutesList = [
    {
        name: "Profile",
        path: "/profile",
        element: <ProfilePage />
    },
    {
        name: "Home",
        path: "/",
        element: <HomePage />
    },

]