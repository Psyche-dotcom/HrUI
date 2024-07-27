"use client";
import React from "react";
import NavItem from "../NavItem";
import { usePathname } from "next/navigation";

const MenuitemF = () => {
  const pathname = usePathname();
  return (
    <>
      <NavItem
        key={1}
        title={"Subscribe"}
        className={`${
          pathname === "/subscribe" && "underline"
        } text-white font-semibold`}
        link={"/subscribe"}
      />
    </>
  );
};

export default MenuitemF;
