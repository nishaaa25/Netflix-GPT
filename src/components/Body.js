import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import MovieInfo from "./MovieInfo";

const Body = () => {
  const AppRouter = createBrowserRouter(
    [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
      {
        path: "/movie/:movieId",
        element: <MovieInfo />,
      },
    ],
    {
      basename: "/Netflix-GPT",
    }
  );
  return (
    <div className="bg-black text-white overflow-hidden">
      <RouterProvider router={AppRouter} />
    </div>
  );
};

export default Body;
