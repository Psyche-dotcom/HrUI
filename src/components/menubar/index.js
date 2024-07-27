"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import MenuitemF from "../menu/index";

const MenuBar = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");

    router.push("/");
  };

  return (
    <nav>
      <div className="w-11/12 md:w-10/12 mx-auto py-10">
        <div className="flex justify-between items-center">
          <Link href="/dashboard">
            <h1 className="text-white font-bold  text-3xl">HR PORTAL</h1>
          </Link>
          <div className="flex gap-8 justify-between">
            <MenuitemF />
            <p
              className="text-white font-semibold rounded-lg cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MenuBar;
