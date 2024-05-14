"use client";

import sideBarLinks from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();

  const sidebarLinks = sideBarLinks.map((link) => {
    const isActive =
      pathname === link.path || pathname.startsWith(`${link.path}/`);
    return (
      <Link
        key={link.path}
        href={link.path}
        className={cn("flex gap-4 items-center p-4 rounded-lg justify-start", {
          "bg-blue-1": isActive,
        })}
      >
        <Image
          src={link.imageUrl}
          alt={link.label}
          width={24}
          height={24}
        ></Image>
        <p className="text-md max-lg:hidden">{link.label}</p>
      </Link>
    );
  });

  return (
    <section
      className="flex sticky left-0 top-0 h-screen w-fit flex-col justify-between bg-dark-1 
        p-6 pt-28 text-white max-sm:hidden lg:w-[264px]"
    >
      <div className="flex flex-1 flex-col">{sidebarLinks}</div>
    </section>
  );
};

export default Sidebar;
