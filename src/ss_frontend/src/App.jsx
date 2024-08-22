import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { RoutesList } from "../Routes/Route";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <main>
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