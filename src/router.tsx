import { createBrowserRouter } from "react-router-dom";
import Feed from "./pages/Feed";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Feed />,
  },
]);
