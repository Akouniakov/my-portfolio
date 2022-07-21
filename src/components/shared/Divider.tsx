import React from "react";

type DividerProps = {
  color: string;
};

const Divider: React.FC<DividerProps> = ({ color }) => {
  return <div className={`border-[${color}] w-full border-t-2`}></div>;
};

export default Divider;
