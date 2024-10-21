import { type FC, useState } from "react";
import { FaBars, FaBook, FaTable } from "react-icons/fa";

import {
  ScfHeader,
  ScfIconButton,
  ScfSidebar,
  ScfSidebarHeader,
  ScfSidebarMenu,
  ScfSidebarMenuItem,
  ScfSidebarSubMenu,
} from "../lib/main";

const App: FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
      }}
    >
      <ScfSidebar collapsed={collapsed}>
        <ScfSidebarHeader logo="S" title="Scaffold" />
        <ScfSidebarMenu>
          <ScfSidebarSubMenu
            icon={<FaTable />}
            label="Tables"
            collapsed={collapsed}
          >
            <ScfSidebarMenuItem>Table1</ScfSidebarMenuItem>
            <ScfSidebarMenuItem>Table2</ScfSidebarMenuItem>
            <ScfSidebarMenuItem>Table3</ScfSidebarMenuItem>
          </ScfSidebarSubMenu>
          <ScfSidebarMenuItem icon={<FaBook />}>
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
            <ScfIconButton
              title="Toggle Sidebar"
              icon={<FaBars />}
              onClick={() => setCollapsed((prev) => !prev)}
            />
          </div>
        </ScfHeader>
      </div>
    </div>
  );
};

export default App;
