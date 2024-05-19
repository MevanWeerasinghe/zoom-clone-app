"use client";

import MeetingTypeList from "@/components/MeetingTypeList";
import { useUser } from "@clerk/nextjs";
import React from "react";

const Home = () => {
  const { user } = useUser();

  const now = new Date();

  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    now
  );

  return (
    <div className="flex size-full flex-col gap-10 text-white">
      {/* top secton */}
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-6 max-md:py-8 md:p-11">
          <h2 className="glassmorphism max-w-[340px] rounded py-2 text-center text-sm font-normal">
            {user?.firstName
              ? `Welcome, ${user.firstName}! Let's connect and collaborate.`
              : "Welcome"}
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl lg:text-5xl font-extrabold">{time}</h1>
            <p className="text-lg lg:text-2xl font-medium text-sky-1">{date}</p>
          </div>
        </div>
      </div>
      {/* Meeting Card list */}
      <MeetingTypeList />
    </div>
  );
};

export default Home;
