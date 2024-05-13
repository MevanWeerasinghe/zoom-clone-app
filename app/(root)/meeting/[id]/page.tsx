import React from "react";

const Metting = ({ params }: { params: { id: string } }) => {
  return <div>Metting room {params.id}</div>;
};

export default Metting;
