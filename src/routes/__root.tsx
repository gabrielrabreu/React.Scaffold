import { type FC } from "react";
import { createRootRoute, Outlet } from "@tanstack/react-router";

const Root: FC = () => {
  return <Outlet />;
};

export const Route = createRootRoute({
  component: Root,
});
