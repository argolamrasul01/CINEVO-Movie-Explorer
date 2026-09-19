import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../Pages/Home";
import MainLayout from "../Layouts/MainLayout";
import MovieListingPage from "../Pages/MovieListingPage";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/movies",
        element: <MovieListingPage />,
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
