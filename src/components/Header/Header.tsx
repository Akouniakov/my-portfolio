import React from "react";

const Header = () => {
  return (
    <div className="container py-6 text-white flex justify-between items-center mx-auto px-8">
      <div className="text-lg">Daniel Khamzen</div>
      <div className="">
        <a href="" className="text-textPurple">
          Home
        </a>
        <a href="">Présentation</a>
        <a href="">Projets</a>
        <a href="">Contact</a>
      </div>
    </div>
  );
};

export default Header;
