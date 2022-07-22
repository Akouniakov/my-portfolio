import React from "react";

type Props = {
  svg: {
    xml: string;
    path: string;
  };
  color: string;
  description: string;
};
// Destructuring
const InformationCard: React.FC<Props> = ({
  color,
  description,
  svg: { xml, path },
}) => {
  return (
    <div
      className={`border-[${color}] flex w-full justify-center space-x-2 rounded-xl border-2 bg-bgSurface1 p-4 align-middle`}
    >
      <div>
        <svg
          className=""
          width="24"
          height="24"
          xmlns={xml}
          fill-rule="evenodd"
          clip-rule="evenodd"
        >
          <path d={path} />
        </svg>
      </div>
      <h1>{description}</h1>
    </div>
  );
};

export default InformationCard;
