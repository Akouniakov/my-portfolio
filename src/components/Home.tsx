import React from "react";

const Home = () => {
  return (
    <div className="lg:px-24-w-full container mx-auto  items-center justify-between px-8 md:px-14">
      <div className="flex h-[calc(100vh-76px)] flex-col">
        <div className="m-auto">
          <h1 className="m-auto text-center text-5xl font-bold">Bonjour 👋</h1>
          <h1 className="m-auto text-center text-3xl font-bold">
            Je m'appelle Daniel et je suis développeur full-stack
          </h1>
        </div>
      </div>

      <div className="flex flex-wrap md:flex-nowrap">Blmablabla</div>
      <div className="left-50 mt-25 absolute -translate-x-1/2 transform space-y-6"></div>
      <nav className="left-percentage fixed lg:mr-24 lg:w-4 xl:block"></nav>
    </div>
  );
};

export default Home;
