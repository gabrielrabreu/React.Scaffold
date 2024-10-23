import { type FC, useState } from "react";

import {
  ScfHeader,
  ScfSidebar,
  ScfSidebarHeader,
  ScfSidebarMenu,
  ScfSidebarMenuItem,
  ScfSidebarSubMenu,
} from "../lib/main";

import Button from "../lib/components/Button";
import IconButton from "../lib/components/IconButton";

import "../lib/styles/main.scss";

const App: FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className="light"
      style={{
        display: "flex",
        height: "100vh",
      }}
    >
      <ScfSidebar collapsed={collapsed}>
        <ScfSidebarHeader logo="S" title="Scaffold" />
        <ScfSidebarMenu>
          <ScfSidebarSubMenu
            icon={
              <span
                className="material-icons"
                style={{ width: 24, height: 24 }}
              >
                table
              </span>
            }
            label="Tables"
            collapsed={collapsed}
          >
            <ScfSidebarMenuItem>Table1</ScfSidebarMenuItem>
            <ScfSidebarMenuItem>Table2</ScfSidebarMenuItem>
            <ScfSidebarMenuItem>Table3</ScfSidebarMenuItem>
          </ScfSidebarSubMenu>
          <ScfSidebarMenuItem
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
          </ScfSidebarMenuItem>
        </ScfSidebarMenu>
      </ScfSidebar>

      <div style={{ display: "flex", flexGrow: 1, flexDirection: "column" }}>
        <ScfHeader>
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
              onClick={() => setCollapsed((prev) => !prev)}
            />
            <Button type="button">A button</Button>
          </div>
        </ScfHeader>
      </div>
    </div>
  );
};

export default App;
