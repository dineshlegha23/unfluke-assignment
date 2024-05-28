import CustomButtonComponent from "../components/CustomButtonComponent";
// export const leaderboardLinks = [
//   "Rank",
//   "Name",
//   "Calmar Ratio",
//   "Overall Profit",
//   "Avg. Daily Profit",
//   "Win % (Day)",
//   "Price (Rs)",
//   "Action",
// ];

export const leaderboardLinks = [
  { field: "Rank", flex: 0.8 },
  { field: "Name", flex: 2 },
  {
    field: "Calmar Ratio",
    flex: 1,
    cellRenderer: CustomButtonComponent,
  },
  { field: "Overall Profit", flex: 1 },
  { field: "Avg Daily Profit", flex: 1.1 },
  { field: "Win % (Day)", flex: 1 },
  {
    field: "Price (Rs)",
    flex: 1,
    valueFormatter: (p) => (p.value === "false" ? "-" : p.value),
  },
  { field: "Action", flex: 1 },
];

// export const leaderboardData = [
//   {
//     name: "Selling with re entr",
//     calmar: 3.96,
//     overallProfit: 381845,
//     avgProfit: 319.54,
//     win: 0.65,
//     price: false,
//   },
//   {
//     name: "Strategy_name",
//     calmar: 3.62,
//     overallProfit: 268872.5,
//     avgProfit: 216.31,
//     win: 0.64,
//     price: 500,
//   },
//   {
//     name: "Based on premium",
//     calmar: 3.42,
//     overallProfit: 255425,
//     avgProfit: 208.51,
//     win: 0.64,
//     price: false,
//   },
//   {
//     name: "strategy_name",
//     calmar: 3.22,
//     overallProfit: 370845,
//     avgProfit: 303.47,
//     win: 0.65,
//     price: false,
//   },
//   {
//     name: "strategy_name",
//     calmar: 3.22,
//     overallProfit: 370845,
//     avgProfit: 303.47,
//     win: 0.65,
//     price: false,
//   },
//   {
//     name: "Based on premium wit",
//     calmar: 3.01,
//     overallProfit: 135980,
//     avgProfit: 185.77,
//     win: 0.49,
//     price: false,
//   },
//   {
//     name: "strategy_name",
//     calmar: 2.76,
//     overallProfit: 267867.5,
//     avgProfit: 218.49,
//     win: 0.6,
//     price: false,
//   },
//   {
//     name: "Wait and trade_save",
//     calmar: 2.62,
//     overallProfit: 178252.5,
//     avgProfit: 161.9,
//     win: 0.63,
//     price: false,
//   },
//   {
//     name: "iron condor",
//     calmar: 2.44,
//     overallProfit: 176420,
//     avgProfit: 137.51,
//     win: 0.65,
//     price: false,
//   },
//   {
//     name: "strategy_name",
//     calmar: 2.04,
//     overallProfit: 244555,
//     avgProfit: 198.66,
//     win: 0.62,
//     price: false,
//   },
// ];

export const leaderboardData = [
  {
    Rank: 1,
    Name: "Selling with re entr",
    "Calmar Ratio": 3.96,
    "Overall Profit": 381845,
    "Avg Daily Profit": 319.54,
    "Win % (Day)": 0.65,
    "Price (Rs)": "false",
  },
  {
    Rank: 2,
    Name: "Strategy_name",
    "Calmar Ratio": 3.62,
    "Overall Profit": 268872.5,
    "Avg Daily Profit": 216.31,
    "Win % (Day)": 0.64,
    "Price (Rs)": 500,
  },
  {
    Rank: 3,
    Name: "Based on premium",
    "Calmar Ratio": 3.42,
    "Overall Profit": 255425,
    "Avg Daily Profit": 208.51,
    "Win % (Day)": 0.64,
    "Price (Rs)": "false",
  },
  {
    Rank: 4,
    Name: "strategy_name",
    "Calmar Ratio": 3.22,
    "Overall Profit": 370845,
    "Avg Daily Profit": 303.47,
    "Win % (Day)": 0.65,
    "Price (Rs)": "false",
  },
  {
    Rank: 5,
    Name: "strategy_name",
    "Calmar Ratio": 3.22,
    "Overall Profit": 370845,
    "Avg Daily Profit": 303.47,
    "Win % (Day)": 0.65,
    "Price (Rs)": "false",
  },
  {
    Rank: 6,
    Name: "Based on premium wit",
    "Calmar Ratio": 3.01,
    "Overall Profit": 135980,
    "Avg Daily Profit": 185.77,
    "Win % (Day)": 0.49,
    "Price (Rs)": "false",
  },
  {
    Rank: 7,
    Name: "strategy_name",
    "Calmar Ratio": 2.76,
    "Overall Profit": 267867.5,
    "Avg Daily Profit": 218.49,
    "Win % (Day)": 0.6,
    "Price (Rs)": "false",
  },
  {
    Rank: 8,
    Name: "Wait and trade_save",
    "Calmar Ratio": 2.62,
    "Overall Profit": 178252.5,
    "Avg Daily Profit": 161.9,
    "Win % (Day)": 0.63,
    "Price (Rs)": "false",
  },
  {
    Rank: 9,
    Name: "iron condor",
    "Calmar Ratio": 2.44,
    "Overall Profit": 176420,
    "Avg Daily Profit": 137.51,
    "Win % (Day)": 0.65,
    "Price (Rs)": "false",
  },
  {
    Rank: 10,
    Name: "strategy_name",
    "Calmar Ratio": 2.04,
    "Overall Profit": 244555,
    "Avg Daily Profit": 198.66,
    "Win % (Day)": 0.62,
    "Price (Rs)": "false",
  },
];