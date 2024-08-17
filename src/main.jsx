import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./component/ErrorPage/ErrorPage.jsx";
import ListedBooks from "./pages/ListedBooks/ListedBooks.jsx";
import PagesToRead from "./pages/PagesToRead/PagesToRead.jsx";
import "./index.css";
import Root from "./Root/Root.jsx";
import Home from "./pages/Home/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { 
        path: '/',
        element: <Home></Home>
     },
      { 
         path: '/listed-book',
         element: <ListedBooks></ListedBooks>
      },
      { 
         path: '/pages-read',
         element: <PagesToRead></PagesToRead>
      },
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
