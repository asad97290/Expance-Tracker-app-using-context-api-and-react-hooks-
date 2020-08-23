import React from "react";
import "./App.css";

import { Balance } from "./components/Balance";
import { IncomeExpance } from "./components/IncomeExpance";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";

import { GlobalProvider } from "./context/GlobalState";

export default function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <h2>Expance Tracker App</h2>
        <Balance />
        <IncomeExpance />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}
