import Calllist from "@/components/Calllist";
import React from "react";

const Previous = () => {
  return (
    <div className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-semibold">Previous</h1>
      <Calllist type="ended" />
    </div>
  );
};

export default Previous;
