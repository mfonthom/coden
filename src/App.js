import { GlobalStyle } from "./GlobalStyle";
import Hero from "./templates/home/hero/Hero";
import Feature from "./templates/home/feature/Feature";
import Services from "./templates/home/services/Service";
import routes from "./routes/routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(routes);

function App() {
  return (
    <div>
      <GlobalStyle />
      <RouterProvider router={router} />
      {/* <Hero /> */}
      {/* <Feature /> */}
      {/* <Services /> */}
    </div>
  );
}

export default App;
