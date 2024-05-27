import React from "react";
import logo from "../images/logo.png";
import bell from "../images/bell-icon.png";

const Navbar = () => {
  return (
    <div className="px-[105px] py-9 flex justify-between">
      <img src={logo} alt="unfluke logo" className="w-[120px]" />
      <div>
        <div className="flex">
          <img src={bell} alt="bell icon" className="w-6" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
