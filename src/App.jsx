import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Timeline from "./pages/Timeline";
import Story from "./pages/Story";
import Memories from "./pages/Memories";
import FAQ from "./pages/FAQ";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/timeline",
        element: <Timeline />,
      },
      {
        path: "/story",
        element: <Story />,
      },
      {
        path: "/memories",
        element: <Memories />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}>App</RouterProvider>;
};

export default App;
