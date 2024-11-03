import { type FC } from "react";
import { createFileRoute, Outlet } from "@tanstack/react-router";

const Auth: FC = () => {
  return <Outlet />;
};

export const Route = createFileRoute("/auth")({
  component: Auth,
});
