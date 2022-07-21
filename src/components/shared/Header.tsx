import React from "react";

const parameters: string = "";

const Header = () => {
  return (
    <div className="py-6">
      <div className="lg:px-24-w-full bg-bgSurface0 container  mx-auto flex items-center justify-between px-8 text-white md:px-14">
        <div className="text-lg">Daniel Khamzen</div>
        <div className="hidden items-center space-x-12 md:flex">
          <a href="" className="text-textPurple">
            Home
          </a>
          <a href="#">Projets</a>
          <a href="#">Contact</a>
        </div>
        <div className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-textPurple"
          >
            <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
