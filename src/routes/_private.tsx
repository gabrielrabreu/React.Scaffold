import { useState, type FC } from "react";
import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

import {
  Header,
  IconButton,
  Logo,
  Menu,
  MenuItem,
  Sidebar,
  SubMenu,
} from "../../lib/main";

const Private: FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className="light"
      style={{
        display: "flex",
        height: "100vh",
      }}
    >
      <Sidebar isCollapsed={isCollapsed}>
        <Logo name="Scaffold" />
        <Menu>
          <MenuItem
            component={<Link to="/" />}
            icon={
              <span
                className="material-icons"
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
                className="material-icons"
                style={{ width: 24, height: 24 }}
              >
                insert_chart
              </span>
            }
            label="Charts"
            isCollapsed={isCollapsed}
          >
            <MenuItem>Pie charts</MenuItem>
            <MenuItem>Line charts</MenuItem>
            <MenuItem>Bar charts</MenuItem>
          </SubMenu>
          <MenuItem
            component={<Link to="/profile" />}
            icon={
              <span
                className="material-icons"
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

      <main style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <Header>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.25rem",
              padding: "6px",
            }}
          >
            <IconButton
              title="Toggle Sidebar"
              icon="reorder"
              type="button"
              onClick={() => setIsCollapsed((prev) => !prev)}
            />
          </div>
        </Header>

        <div style={{ padding: "0 16px", flexGrow: 1 }}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export const Route = createFileRoute("/_private")({
  component: Private,
});
