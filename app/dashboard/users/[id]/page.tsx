import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text2xl">user profile: {id}</h2>
    </div>
  );
};

export default page;
