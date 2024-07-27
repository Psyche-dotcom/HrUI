import Link from "next/link";
import React from "react";

const NavItem = ({ title, link, className }) => {
  return (
    <Link href={link}>
      <span className={className} aria-label={title}>
        {title}
      </span>
    </Link>
  );
};
export default NavItem;
