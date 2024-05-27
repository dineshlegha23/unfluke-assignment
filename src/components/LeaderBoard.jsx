import React from "react";

const LeaderBoard = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-[42px] mt-[70px]">
      <div className="border-[1.5px] py-2 px-[8px] rounded-md">
        <div className="flex justify-between items-center">
          <p className="text-[32px] font-bold text-black/80">Basic Backtest</p>
          <div className="flex items-center">
            <p className="py-[6px] px-3 bg-black/5 border-[1px] border-black/20 tracking-wider rounded-s-md">
              Slippage
            </p>
            <select
              name="slippage"
              id="slippage"
              className="border-e-[1px] border-y-[1px] border-black/20 px-3 py-[6.5px] rounded-e-md"
            >
              <option value="0">0%</option>
              <option value="0.5">0.5%</option>
              <option value="1">1%</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeaderBoard;
