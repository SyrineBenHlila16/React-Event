// import { createBrowserRouter } from "react-router-dom";
// import Events from "./Composants_fonctionnels/Events.jsx";
// import EventDetails from "./Composants_fonctionnels/EventDetails.jsx";
// import NotFound from "./Composants_fonctionnels/NotFound.jsx";
// import { Suspense } from "react";
// import App from "./App.jsx";
// export const router = createBrowserRouter([
//     {
//         path: "/events",
//         element: <App />,
//         children: [
//             { index: true, element: <Events /> },
//             {
//                 path: ":name",
//                 element: (<EventDetails />)
//             },
//             { path: "**", element: <NotFound /> }
//         ]
//     }
// ])
import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import App from "./App.jsx";
import NotFound from "./Composants_fonctionnels/NotFound.jsx";

const Events = lazy(() => import("./Composants_fonctionnels/Events.jsx"));
const EventDetails = lazy(() => import("./Composants_fonctionnels/EventDetails.jsx"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: (
            <Events />
        ),
      },
      {
        path: "events",
        element: (
            <Events />
        ),
      },
      {
        path: "events/:name",
        element: (
            <EventDetails />
        ),
      }
    ]
  }
]);
