import React from "react";
import { FaCaretDown } from "react-icons/fa6";
import logo from "../images/logo.png";
import bell from "../images/bell-icon.png";
import coin from "../images/coin.jpeg";
import user from "../images/user.jpg";

const Navbar = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-[30px] pt-9 pb-[15px] flex justify-between items-center">
      <img src={logo} alt="unfluke logo" className="w-[120px]" />
      <div className="flex gap-5 h-7">
        <div className="flex gap-1">
          <img src={bell} alt="bell icon" className="w-6 h-6" />
          <FaCaretDown size={12} color="gray" className="mt-1" />
        </div>
        <div className="flex gap-2">
          <img src={coin} alt="coin logo" className="w-7" />
          <p>0</p>
        </div>
        <div className="flex gap-1">
          <img
            src={user}
            alt="user logo"
            className="w-7 border-[1px] border-black rounded-full"
          />
          <FaCaretDown size={12} color="gray" className="mt-1" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
