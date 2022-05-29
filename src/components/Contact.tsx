import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto flex w-full items-center justify-between">
      <section className="w-full">
        <h2>Contactez moi !</h2>
        <p>TODO TODO TODO</p>
        <div className="grid w-full">
          <div className="space-y-6">
            <div>
              <label>Email</label>
              <input />
            </div>
            <div>
              <label>Nom</label>
              <input />
            </div>
            <div>
              <label>Message</label>
              <input />
            </div>
          </div>
          <button>Envoyer !</button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
