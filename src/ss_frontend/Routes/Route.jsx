import AboutPage from "../src/pages/AboutPage";
import HomePage from "../src/pages/HomePage";
import PeoplePage from "../src/pages/PeoplePage";
import ProfileForm from "../src/pages/ProfileForm/ProfileForm";
import ProfilePage from "../src/pages/ProfilePage";

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
    name: "People",
    path: "/people",
    element: <PeoplePage />,
  },
];