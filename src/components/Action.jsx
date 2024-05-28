import React from "react";

const Action = (props) => {
  return (
    <p className="text-blue-700 cursor-pointer hover:text-blue-400">
      {props.data["Price (Rs)"] === "false" ? (
        <span>View</span>
      ) : (
        <span>Buy</span>
      )}
    </p>
  );
};

export default Action;
