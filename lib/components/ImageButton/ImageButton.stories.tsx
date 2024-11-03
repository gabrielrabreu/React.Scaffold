import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import ImageButton from "./ImageButton";

const meta = {
  title: "ImageButton",
  component: ImageButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof ImageButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    src: "https://i.pinimg.com/736x/dc/28/a7/dc28a77f18bfc9aaa51c3f61080edda5.jpg",
    alt: "Placeholder Image",
  },
};
