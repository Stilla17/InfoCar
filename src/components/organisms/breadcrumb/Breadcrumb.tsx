// Breadcrumb.tsx
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useRef } from "react";
const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const myRef = useRef<HTMLAnchorElement>(null);
  const [modelsLinks, setModelsLinks] = useState<any>();

  useEffect(() => {
    if (myRef.current) {
      setModelsLinks(myRef.current.href);
    }
  }, [pathnames]);

  return (
    <div>
      {pathnames.length === 0 ? (
        <Link to={"/"}>Categroy </Link>
      ) : pathnames[0] === "models" ? (
        <div className="flex gap-[10px]">
          <Link to={"/"}>Categroy </Link> <span>&gt;</span>
          <Link ref={myRef} to={`/${pathnames[0]}/${pathnames[1]}`}>
            Models
          </Link>
        </div>
      ) : pathnames[0] === "item" ? (
        <div className="flex gap-[10px]">
          <Link to={"/"}>Categroy </Link>
          <span>&gt;</span>
          <Link to={`${modelsLinks}`}>Models</Link>
          <span>&gt;</span>
          <p className="cursor-pointer">Info Car</p>
        </div>
      ) : null}
    </div>
  );
};

export default Breadcrumb;
