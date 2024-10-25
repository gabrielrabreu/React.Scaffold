import { type FC, useState } from "react";

import {
  Header,
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  IconButton,
} from "../lib/main";

const App: FC = () => {
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
        <Menu>
          <MenuItem
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
      <div style={{ display: "flex", flexGrow: 1, flexDirection: "column" }}>
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
      </div>
    </div>
  );
};

export default App;
