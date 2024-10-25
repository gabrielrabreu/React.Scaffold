import { useRef, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Dropdown from "./Dropdown";
import Button from "../Button";

const meta = {
  title: "Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    referenceElement: null,
    placement: "bottom",
    onClose: fn(),
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    return (
      <>
        <Button ref={buttonRef} onClick={() => setIsOpen((prev) => !prev)}>
          Toggle Dropdown
        </Button>
        {isOpen && (
          <Dropdown
            {...args}
            referenceElement={buttonRef.current}
            onClose={() => {
              setIsOpen(false);
              args.onClose();
            }}
          >
            <div style={{ padding: "10px", backgroundColor: "#f0f0f0" }}>
              Dropdown Content
            </div>
          </Dropdown>
        )}
      </>
    );
  },
};
