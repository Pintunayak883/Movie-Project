import React from "react";

const Header = () => {
  return (
    <>
      <span
        onClick={() => window.scroll(0, 0)}
        className="fixed w-full cursor-pointer flex items-center justify-center uppercase bg-gray-700 font-montserrat text-white md:text-5xl text-3xl p-3  shadow-md z-50 scroll-smooth"
      >
        🎬 MovieMingle 🍿
      </span>
    </>
  );
};

export default Header;
