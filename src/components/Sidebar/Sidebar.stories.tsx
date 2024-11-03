import type { Meta, StoryObj } from "@storybook/react";

import Logo from "./Logo";
import MenuItem from "./MenuItem";
import Menu from "./Menu";
import Sidebar from "./Sidebar";
import SubMenu from "./SubMenu";

const meta = {
  title: "Sidebar",
  component: Sidebar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => (
    <div style={{ display: "flex", height: "100%", minHeight: "400px" }}>
      <Sidebar {...args}>
        <Logo name='Scaffold' />
        <Menu>
          <MenuItem
            icon={
              <span
                className='material-icons'
                style={{ width: 24, height: 24 }}
              >
                home
              </span>
            }
          >
            Home
          </MenuItem>
          <SubMenu
            icon={
              <span
                className='material-icons'
                style={{ width: 24, height: 24 }}
              >
                insert_chart
              </span>
            }
            label='Charts'
            isCollapsed={args.isCollapsed}
          >
            <MenuItem>Pie charts</MenuItem>
            <MenuItem>Line charts</MenuItem>
            <MenuItem>Bar charts</MenuItem>
          </SubMenu>
          <MenuItem
            icon={
              <span
                className='material-icons'
                style={{ width: 24, height: 24 }}
              >
                book
              </span>
            }
          >
            Documentation
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  ),
};
