import AboutPage from "../src/pages/AboutPage";
import HomePage from "../src/pages/HomePage";
import ProfileForm from "../src/pages/ProfileForm/ProfileForm";
import ProfilePage from "../src/pages/ProfilePage";
import SearchPage from "../src/pages/SearchPage";
import UsersPage from "../src/pages/UsersPage";

export const RoutesList = [
  {
    name: "Profile",
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    name: "Profile Form",
    path: "/profile-form",
    element: <ProfileForm />,
  },
  {
    name: "Home",
    path: "/",
    element: <HomePage />,
  },
  {
    name: "About",
    path: "/about",
    element: <AboutPage />,
  },
  {
    name: "Users",
    path: "/users",
    element: <UsersPage />,
  },
  {
    name: "Search",
    path: "/search",
    element: <SearchPage />,
  },
];
