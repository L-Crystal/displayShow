import { Link, type RouteObject } from "react-router-dom";

export const functionsRoute: RouteObject = {
  path: "functions",
  lazy: async () => ({
    Component: (await import("./index")).default,
  }),
  handle: {
    crumb: () => <Link to="/functions">函数收集</Link>,
  },
};
