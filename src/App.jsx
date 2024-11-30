import DetailProductPage from "./pages/DetailProductPage";
import HomePage from "./pages/HomePage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/product-detail",
    element: <DetailProductPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
