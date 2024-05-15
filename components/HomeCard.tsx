"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface HomeCardProps {
  img: string;
  title: string;
  description: string;
  handleClick: () => void;
  color: string;
}

const HomeCard = ({
  img,
  title,
  description,
  handleClick,
  color,
}: HomeCardProps) => {
  return (
    <div
      className={cn(
        "flex flex-col w-full xl:max-w-[270px] h-[240px] px-4 py-6 rounded-[14px] cursor-pointer justify-between",
        color
      )}
      onClick={handleClick}
    >
      <div className="flex-center glassmorphism size-12 rounded-[10px]">
        <Image src={img} alt={title} width={27} height={27} />
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="text-md font-normal">{description}</p>
      </div>
    </div>
  );
};

export default HomeCard;
