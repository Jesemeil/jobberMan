import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Contact, { contactAction } from "./pages/help/Contact";
import NotFound from "./pages/NotFound";
import Careers, { careersLoader } from "./pages/careers/Careers";
import CareerDetails, {
  careerDetailsLoader,
} from "./pages/careers/CareerDetails";
import CareersError from "./pages/careers/CareersError";

// layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import CareersLayout from "./layouts/CareersLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "help",
        element: <HelpLayout />,
        children: [
          {
            path: "faq",
            element: <Faq />,
          },
          {
            path: "contact",
            element: <Contact />,
            action: contactAction,
          },
        ],
      },
      {
        path: "careers",
        element: <CareersLayout />,
        errorElement: <CareersError />,
        children: [
          {
            index: true,
            element: <Careers />,
            loader: careersLoader,
          },
          {
            path: ":id",
            element: <CareerDetails />,
            loader: careerDetailsLoader,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
