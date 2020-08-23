import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts
    .reduce((sum, item) => (sum += item), 0) // initial value
    .toFixed(2);
  const sign = total < 0 ? "-" : "";

  return (
    <div>
      <h4>Your Balance</h4>
      <h1 className="balance">
        {sign}Rs.{Math.abs(total)}/-
      </h1>
    </div>
  );
};
