import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Project from "./pages/project/project";
import Projects from "./pages/projects/projects";
import Homepage from "./pages/homepage/homepage";
import Skills from "./pages/skills/skills";
import Contact from "./pages/contact/contact";

import { loader as projectLoader } from "./pages/project/project";
import ErrorPage from "./components/errorPage/errorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route index element={<Homepage />} />
      <Route path="projects" element={<Projects />} />
      <Route
        path="projects/:projectId"
        element={<Project />}
        loader={projectLoader}
        errorElement={<ErrorPage />}
      />
      <Route path="skills" element={<Skills />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
