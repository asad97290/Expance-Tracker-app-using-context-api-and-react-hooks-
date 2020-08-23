import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ txn }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = txn.amount < 0 ? "-" : "+";

  return (
    <li className={txn.amount < 0 ? "minus" : "plus"}>
      {txn.text}
      <span>
        {sign}Rs.{Math.abs(txn.amount)}
      </span>
      <button className="delete-btn" onClick={() => deleteTransaction(txn.id)}>
        x
      </button>
    </li>
  );
};
