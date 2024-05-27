import React from "react";
import { FaCaretDown } from "react-icons/fa6";
import { SiWindows11 } from "react-icons/si";
import { links } from "../constants/navlinks";
import Links from "./Links";

const HeroLinks = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-[62px] py-[14px]">
      <ul className="flex gap-[25px] font-semibold">
        <li className="flex items-center gap-[10px] cursor-pointer">
          <SiWindows11 />
          <p>LeaderBoard</p>
        </li>
        <li className="flex items-center gap-1 cursor-pointer">
          <p>Historical Trading</p>
          <FaCaretDown size={12} />
        </li>
        {links.map(
          (link, index) => index > 1 && <Links key={link} link={link} />
        )}
      </ul>
    </div>
  );
};

export default HeroLinks;
