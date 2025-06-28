import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
  layout("pages/layout.tsx", [
    index("pages/home.tsx"),
    route("merch", "pages/merch.tsx"),
    route("about", "pages/about.tsx"),
    route("dashboard", "pages/dashboard/index.tsx", [
      index("pages/dashboard/home.tsx"),
      route("settings", "pages/dashboard/settings.tsx")
    ]),
    ...prefix("concerts", [
      index("pages/concerts/index.tsx"),
      route(":city", "pages/concerts/city.tsx"),
      route("trending", "pages/concerts/trending.tsx"),
    ])
  ]),
] satisfies RouteConfig;
