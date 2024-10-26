import { type FC } from "react";
import { createLazyFileRoute } from "@tanstack/react-router";

const Profile: FC = () => {
  return (
    <div>
      <h2>Profile</h2>
      <p>This is the page content.</p>
    </div>
  );
};

export const Route = createLazyFileRoute("/_private/profile")({
  component: Profile,
});
