import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((path) => path);
  const lastPath = paths[paths.length - 1];

  return (
    <nav className="breadcrumb">
      <ul className="flex gap-2 text-sm">
        <li>
          <Link to="/">Bosh sahifa</Link>
        </li>
        {paths.map((path, index) => (
          <React.Fragment key={index}>
            <span>&gt;</span>
            <li>
              {index < paths.length - 1 ? (
                <Link to={`/${path}`}>{path}</Link>
              ) : (
                lastPath.charAt(0).toUpperCase() + lastPath.slice(1)
              )}
            </li>
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
