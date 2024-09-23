import React, { ReactNode } from "react";
import "./layout.css";
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <div className="container">{children}</div>
    </div>
  );
};

export default Layout;
