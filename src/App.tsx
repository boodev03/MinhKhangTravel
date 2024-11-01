import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import { publicRoutes } from "./config/Route";

function App() {
  return (
    <main className="overflow-hidden">
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              {publicRoutes.map((route) => {
                const Page = route.component;
                return (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={<Page />}
                  />
                );
              })}
            </Route>
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </main>
  );
}

export default App;
