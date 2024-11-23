import React from "react";
import './TransactionVolume.css'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

function TransactionVolume(){
  const data = [
    { day: "Mon", volume: 300 },
    { day: "Tue", volume: 450 },
    { day: "Wed", volume: 200 },
    { day: "Thu", volume: 500 },
    { day: "Fri", volume: 700 },
  ];

  return (
    <div className="transactionComponent">
      <h2>Transaction Volume</h2>
      <LineChart width={300} height={200} data={data}>
        <Line type="monotone" dataKey="volume" stroke="#8884d8" />
        <CartesianGrid stroke="red" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default TransactionVolume;
