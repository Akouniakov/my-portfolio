import React from "react";

const Home = () => {
  return (
    <div className="container mt-16 justify-between items-center mx-auto px-8 md:px-14 lg:px-24-w-full bg-fuchsia-400">
      <h1 className="font-bold text-5xl">
        Bonjour 👋 <br /> Je suis DATA
      </h1>
      <div className="flex flex-wrap md:flex-nowrap">Blmablabla</div>
      <div className="absolute left-50 transform -translate-x-1/2 space-y-6 mt-25"></div>
      <nav className="inline-block lg:mr-24 lg:w-4 fixed left-percentage hidden xl:block"></nav>
    </div>
  );
};

export default Home;
