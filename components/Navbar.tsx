import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed flex justify-between w-full z-50 bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          alt="logo"
          width={32}
          height={32}
          className="max-sm:size-10"
        />
        <h1 className="text-xl font-extrabold text-white max-sm:hidden">
          Eventify
        </h1>
      </Link>
    </div>
  );
};

export default Navbar;
