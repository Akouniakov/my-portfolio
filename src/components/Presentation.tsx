import React from "react";

const Presentation: React.FC = () => {
  return (
    <div className="lg:px-24-w-full container mx-auto items-center justify-between px-8 md:px-14">
      <div className="flex flex-col rounded-lg ">
        <h1 className="m-auto text-2xl font-bold">Présentation :</h1>
        <div>
          <p>Je m'appele Daniel Khamzen et j'ai 21 ans, j'habite à Lyon</p>
          <p>
            Passionez par l'informatique, je me forme sur tous les sujets de
            manière auto dictate que ce soit :
          </p>
          <ul>
            <li>- DevOps</li>
            <li>- SysAdmin</li>
            <li>- Full-stack</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
