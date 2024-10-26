import { type FC } from "react";
import { createLazyFileRoute } from "@tanstack/react-router";

const Home: FC = () => {
  return (
    <div>
      <h2>Home</h2>
      <p>This is the page content.</p>
    </div>
  );
};

export const Route = createLazyFileRoute("/_private/")({
  component: Home,
});
