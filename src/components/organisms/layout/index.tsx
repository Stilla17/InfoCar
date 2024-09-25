import React, { ReactNode } from "react";
import "./layout.css";
import Breadcrumb from "../breadcrumb/Breadcrumb";
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <div className="container">
        <Breadcrumb />
        {children}
      </div>
    </div>
  );
};

export default Layout;
