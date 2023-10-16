import React, { ReactNode } from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import OpenIconSpeedDial from "./SpeedDial";

interface AppLayoutProps {
  children: ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
  return (
    <div>
      <ResponsiveAppBar />
      {children}
      <OpenIconSpeedDial />
    </div>
  );
}

export default AppLayout;
