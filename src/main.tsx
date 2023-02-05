import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import Project from './components/project/project';
import Projects from './pages/projects/projects';
import Homepage from './pages/homepage/homepage';
import Skills from './pages/skills/skills';
import Contact from './pages/contact/contact';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     loader: rootLoader,
//     children: [
//       {
//         path: "team",
//         element: <Team />,
//         loader: teamLoader,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Homepage />} />
      <Route path="projects" element={<Projects />}></Route>
      <Route path="skills" element={<Skills />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <BrowserRouter>
  //   <App />
  // </BrowserRouter>
  <RouterProvider router={router} />
);
