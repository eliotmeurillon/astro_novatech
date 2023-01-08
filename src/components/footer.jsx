import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-400  to-blue-500 p-4">
      <div className="flex flex-col items-center justify-center">
        <p>Abonnez-vous à nos dernières nouvelles</p>
        <div className="flex flex-row items-center justify-center">
          <input
            type="text"
            className="bg-gray-700 text-white p-2 rounded-l-md"
            placeholder="Votre adresse email"
          />
          <button className="bg-gray-700 text-white p-2 rounded-r-md">
            S'inscrire
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
