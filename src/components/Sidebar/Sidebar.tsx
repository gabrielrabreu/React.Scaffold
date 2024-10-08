import { useState, type FC } from "react";

import Expanded from "./Expanded";
import Collapsed from "./Collapsed";

const Sidebar: FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded((prev) => !prev);
  };

  return isExpanded ? (
    <Expanded onToggle={toggleSidebar}></Expanded>
  ) : (
    <Collapsed onToggle={toggleSidebar}></Collapsed>
  );
};

export default Sidebar;
