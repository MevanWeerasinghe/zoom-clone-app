"use client";

import { useUser } from "@clerk/nextjs";
import React from "react";

const Table = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-start gap-2 xl:flex-row">
      <h1 className="text-base font-medium text-sky-1 lg:text-xl xl:min-w-32">
        {title}:
      </h1>
      <h1 className="truncate text-sm font-bold max-sm:max-w-[320px] lg:text-lg">
        {description}
      </h1>
    </div>
  );
};

const PersonalRoom = () => {
  const { user } = useUser();
  const meetingId = user?.id;
  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${meetingId}?personal=true`;

  return (
    <div className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-semibold">PersonalRoom</h1>
      <div className="flex w-full flex-col gap-8 xl:max-w-[900px]">
        <Table title="Topic" description={`${user?.username}'s meeting room`} />
        <Table title="Meeting ID" description={meetingId!} />
        <Table
          title="Invite Link"
          description={`${user?.username}'s meeting room`}
        />
      </div>
    </div>
  );
};

export default PersonalRoom;
