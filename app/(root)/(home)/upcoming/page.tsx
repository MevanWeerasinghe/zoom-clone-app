import Calllist from "@/components/Calllist";
import React from "react";

const Upcoming = () => {
  return (
    <div className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-semibold">Upcoming</h1>
      <Calllist type="upcoming" />
    </div>
  );
};

export default Upcoming;
