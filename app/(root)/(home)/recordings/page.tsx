import Calllist from "@/components/Calllist";
import React from "react";

const Recordings = () => {
  return (
    <div className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-semibold">Recordings</h1>
      <Calllist type="recording" />
    </div>
  );
};

export default Recordings;
