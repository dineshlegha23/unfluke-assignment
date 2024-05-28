import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

import {
  leaderboardLinks,
  leaderboardData,
} from "../constants/leaderboard-data";

const LeaderBoardTable = () => {
  return (
    <div className="ag-theme-quartz" style={{ height: 550 }}>
      <AgGridReact
        rowData={leaderboardData}
        columnDefs={leaderboardLinks}
        pagination={true}
        paginationPageSizeSelector={[10, 20, 30]}
        paginationPageSize={10}
      />
    </div>
  );
};

export default LeaderBoardTable;
