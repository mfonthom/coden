import Main from "../pages/Main";
import Home from "../templates/home/Home";

const routes = [
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
];

export default routes;
