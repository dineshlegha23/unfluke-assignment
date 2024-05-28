import React from "react";
import { IoIosTrendingUp } from "react-icons/io";

const CustomButtonComponent = ({ value }) => {
  return (
    <div className="flex items-center gap-2">
      <IoIosTrendingUp color="green" />
      {value}
    </div>
  );
};

export default CustomButtonComponent;
