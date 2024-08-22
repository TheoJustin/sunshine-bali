import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { RoutesList } from "../Routes/Route";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <main id="mainapp">
          <Routes>
            {RoutesList.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </main>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
