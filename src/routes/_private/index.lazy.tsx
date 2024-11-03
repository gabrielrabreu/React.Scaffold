import { createLazyFileRoute } from "@tanstack/react-router";

import Home from "../../pages/Home";

export const Route = createLazyFileRoute("/_private/")({
  component: Home,
});
