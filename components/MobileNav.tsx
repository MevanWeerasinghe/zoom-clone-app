"use client";

import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import sideBarLinks from "@/constants/index";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MobileNav = () => {
  const pathname = usePathname();

  const sidebarLinks = sideBarLinks.map((link) => {
    const isActive = pathname === link.path;
    return (
      <SheetClose asChild key={link.path}>
        <Link
          key={link.path}
          href={link.path}
          className={cn(
            "flex gap-4 items-center p-4 rounded-lg justify-start",
            {
              "bg-blue-1": isActive,
            }
          )}
        >
          <Image
            src={link.imageUrl}
            alt={link.label}
            width={20}
            height={20}
          ></Image>
          <p className="text-sm">{link.label}</p>
        </Link>
      </SheetClose>
    );
  });
  return (
    <div className="sm:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/icons/hamburger.svg"
            alt="hamburger"
            width={36}
            height={36}
          />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="border-none bg-dark-1 min-w-[264px]"
        >
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/icons/logo.svg"
              alt="logo"
              width={32}
              height={32}
              className="max-sm:size-10"
            />
            <h1 className="text-xl font-extrabold text-white">Eventify</h1>
          </Link>

          <SheetClose asChild>
            <section className="flex-between flex-1 flex-col text-white pt-8">
              {sidebarLinks}
            </section>
          </SheetClose>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
