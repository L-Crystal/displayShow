import { createBrowserRouter, Navigate, type RouteObject } from "react-router-dom";

import { echartsDemoRoute } from "@/pages/echarts-demo/routes";
import { functionsRoute } from "@/pages/functions/routes";
import { landingRoute } from "@/pages/landing/routes";
import { navRoute } from "@/pages/nav/routes";
import { userManagerRoute } from "@/pages/user-management/routes";

const routes: RouteObject[] = [
  {
    path: "login",
    lazy: async () => ({
      Component: (await import("@/pages/login")).default,
    }),
  },
  {
    path: "/",
    lazy: async () => ({
      Component: (await import("@/layouts")).default,
    }),
    children: [
      {
        index: true,
        element: <Navigate replace to="/landing" />,
      },
      landingRoute,
      userManagerRoute,
      functionsRoute,
      navRoute,
      echartsDemoRoute,
    ],
  },
  {
    path: "*",
    lazy: async () => ({
      Component: (await import("@/pages/not-found")).default,
    }),
  },
];

export const router = createBrowserRouter(routes, {
  basename: import.meta.env.VITE_APP_BASE_URL,
});
