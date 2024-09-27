import React from "react";

type Props = {};

const loading = (props: Props) => {
  return (
    <div className="flex h-screen w-full items-center justify-center text-4xl text-red-400">
      <div>Loading</div>
    </div>
  );
};

export default loading;
