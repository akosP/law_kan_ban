import React from "react";
import imageToAdd from "@/app/assets/folketinget.png";

const Header = () => {
  return (
    <div className="bg-neutral-800 p-3 flex flex-row">
      <img src={imageToAdd.src} alt="Image" className="size-14 mr-3" />
      <div>
        <h1>Law Overview</h1>
        <p>Lov- og beslutningsforslag i Folketinget</p>
      </div>
    </div>
  );
};

export default Header;
