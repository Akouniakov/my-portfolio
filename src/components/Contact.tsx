import React from "react";
import gif from "../img/cat-berg-cat.gif";

const Contact: React.FC = () => {
  return (
    <div className="lg:px-24-w-full container mx-auto items-center justify-between px-8 md:px-14">
      <h1 className="my-6 text-2xl font-bold">Contact</h1>
      <div className="w-full rounded-lg bg-bgSurface1 p-4">
        <div className="flex">
          <form className="">
            <div className="">
              <label className="mb-2 block text-lg font-medium">Nom</label>
              <input
                className=" rounded-md border border-bgSurface2 bg-bgSurface3"
                placeholder="Insérez votre nom"
              />
            </div>
            <div>
              <label className="mb-2 block text-lg font-medium">Prénom</label>
              <input
                className="rounded-md border-bgSurface2 bg-bgSurface3"
                placeholder="Insérez votre prénom"
              />
            </div>
            <div className="">
              <label className="mb-2 block text-lg font-medium">Email</label>
              <input
                className="rounded-md border-bgSurface2 bg-bgSurface3"
                placeholder="Insérez votre email"
              />
            </div>
            <div>
              <label className="mb-2 block text-lg font-medium">Message</label>
              <textarea
                className="h-28 rounded-md border-bgSurface2 bg-bgSurface3"
                placeholder="Insérez votre message"
              ></textarea>
            </div>
          </form>
          <div className="h-max">
            <img className="rounded-lg" src={gif} />
          </div>
        </div>
        <button className="w-40 rounded-md bg-purple-500 px-4 py-2 text-white hover:bg-purple-400">
          Envoyer !
        </button>
      </div>
    </div>
  );
};

export default Contact;
