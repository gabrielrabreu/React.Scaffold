import React from "react";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  globalTypes: {
    theme: {
      description: "Global theme for components",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: ["light", "dark"],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: "light",
  },
  decorators: [
    (Story, { context }) => {
      const selectedTheme = context.globals.theme || "light";
      return (
        <div className={selectedTheme}>
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
