import { createBrowserRouter } from "react-router-dom";
import Events from "./Composants_fonctionnels/Events.jsx";
import NotFound from "./Composants_fonctionnels/NotFound.jsx";
import EventDetails from "./Composants_fonctionnels/EventDetails.jsx";
import RootLayout from "./Composants_fonctionnels/RootLayout.jsx";
import { Suspense } from "react";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { index: true, element: <Events /> },
            { path: "events", element: <Events /> },
            {
                path: "event/:name",
                element: (
                    <Suspense fallback={<div>Chargement...</div>}>
                        <EventDetails />
                    </Suspense>
                )
            },
            { path: "*", element: <NotFound /> }
        ]
    }
])