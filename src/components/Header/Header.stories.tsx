import type { Meta, StoryObj } from "@storybook/react";

import Header from "./Header";
import IconButton from "../IconButton";

const meta = {
  title: "Header",
  component: Header,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => (
    <div
      style={{
        display: "flex",
        flexGrow: 1,
        flexDirection: "column",
        minWidth: "400px",
      }}
    >
      <Header {...args}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
            padding: "6px",
          }}
        >
          <IconButton title="Toggle Sidebar" icon="reorder" type="button" />
          <span>Title</span>
        </div>
      </Header>
    </div>
  ),
};
