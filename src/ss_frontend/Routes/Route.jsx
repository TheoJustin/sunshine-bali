import HomePage from "../src/pages/HomePage";
import ProfileForm from "../src/pages/ProfileForm/ProfileForm";
import ProfilePage from "../src/pages/ProfilePage";

export const RoutesList = [
    {
        name: "Profile",
        path: "/profile",
        element: <ProfilePage />
    },
    {
        name: "Profile Form",
        path: "/profile-form",
        element: <ProfileForm />
    },
    {
        name: "Home",
        path: "/",
        element: <HomePage />
    },

]