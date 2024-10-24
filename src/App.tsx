import { RouterProvider } from "react-router-dom";

import { MovieProvider } from "./context/movies-context";
import { router } from "./routes";

function App() {
  return (
    <MovieProvider>
      <RouterProvider router={router} />
    </MovieProvider>
  );
}

export default App;
