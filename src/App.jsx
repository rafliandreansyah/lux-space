import DetailProductPage from "./pages/DetailProductPage";
import HomePage from "./pages/HomePage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SuccessPage from "./pages/SuccessPage";
import CartPage from "./pages/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/product-detail",
    element: <DetailProductPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/success",
    element: <SuccessPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
