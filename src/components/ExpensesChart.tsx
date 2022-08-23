import React from "react";
import { barData } from "../data";
import IBarData from "../interfaces/IBarData";

function ExpensesChart() {
  const today = new Date().getDay();
  console.log(today);
  return (
    <article className="chart flex col gap-1">
      <div className="chart__header flex items-center justify-between text-white bg-primary rounded-md resp-padding">
        <div>
          <p className="mb-1">My balance</p>
          <h2>$921.48</h2>
        </div>
        <img
          className="icon"
          src={process.env.PUBLIC_URL + "/images/logo.svg"}
          alt="Icon"
        />
      </div>
      <div className="chart__body flex col gap-2 bg-white rounded-md resp-padding">
        <h3 className="color-neutral-400 font-bold mb-2">
          Spending - Last 7 days
        </h3>
        <BarChart barData={barData} />
        <hr />
        <div className="flex justify-between items-end">
          <div>
            <p className="text-light">Total this month</p>
            <h5 className="color-neutral-400 font-heading">$478.33</h5>
          </div>
          <div className="flex col items-end">
            <p className="color-neutral-400 font-bold">+2.4%</p>
            <p className="text-light">from last month</p>
          </div>
        </div>
      </div>
    </article>
  );
}

const BarChart: React.FC<IBarData> = ({ barData }) => {
  const renderBarChart = (): JSX.Element[] => {
    return barData.map((bar, index) => (
      <div
        key={index}
        className="flex col mx-auto justify-end items-center text-light"
      >
        <div className="relative bar-container flex col gap-1 justify-center items-center">
          <p className="absolute amount text-sm font-bold">${bar.amount}</p>
          <div
            className="bar bg-primary"
            style={{ height: `${bar.amount * 0.179}rem` }}
          ></div>
        </div>
        <p className="text-sm">{bar.day}</p>
      </div>
    ));
  };
  return <div className="expense-days flex">{renderBarChart()}</div>;
};

export default ExpensesChart;
