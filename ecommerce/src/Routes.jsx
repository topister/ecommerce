import { useRoutes } from "react-router-dom";
import Home from "./pages/Home.jsx";

const ProjectRoutes = () => {
  let element = useRoutes([{ path: "/", element: <Home /> }]);
  return element;
};

export default ProjectRoutes;
