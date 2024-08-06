"use client";
import React from "react";
import NavItem from "../NavItem";
import { usePathname } from "next/navigation";

const MenuitemF = () => {
  const pathname = usePathname();
  return (
    <div className="flex gap-6 items-center">
      <NavItem
        key={1}
        title={"Subscribe"}
        className={`${
          pathname === "/subscribe" && "underline"
        } text-white font-semibold`}
        link={"/subscribe"}
      />
      <NavItem
        key={1}
        title={"Labour"}
        className={`${
          pathname === "/labour" && "underline"
        } text-white font-semibold`}
        link={"/labour"}
      />
      <NavItem
        key={1}
        title={"Create Labour"}
        className={`${
          pathname === "/staff/create" && "underline"
        } text-white font-semibold`}
        link={"/staff/create"}
      />
    </div>
  );
};

export default MenuitemF;
