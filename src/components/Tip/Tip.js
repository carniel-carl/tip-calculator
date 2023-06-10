import React, { useState } from "react";
import "./Tip.css";

const Tip = ({ tip, totalTip, totalAmt, completed, resetAll }) => {
  const currencyAmt = (amt) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amt);

  return (
    <div className="tips">
      <div className="tip">
        <div className="tip-amount">
          <div className="tip-amount_details">
            <p className="tip__title">Tip Amount</p>
            <p className="person">/ Person</p>
          </div>

          <div className="tip-total">
            <h2 className="amount">{currencyAmt(tip)}</h2>
          </div>
        </div>
        <div className="tip-amount">
          <div className="tip-amount_details">
            <p className="tip__title">Total</p>
            <p className="person">/ Person</p>
          </div>

          <div className="tip-total">
            <h2 className="amount">{currencyAmt(totalTip)}</h2>
          </div>
        </div>
        {/* <div className="tip-amount">
          <div className="tip-amount_details">
            <p className="tip__title">Total</p>
            <p className="person">Amount</p>
          </div>

          <div className="tip-total">
            <h2 className="amount">{currencyAmt(totalAmt)}</h2>
          </div>
        </div> */}
      </div>

      <button
        className={`tips-btn ${completed ? "reset" : null}`}
        onClick={completed ? resetAll : null}
      >
        reset
      </button>
    </div>
  );
};

export default Tip;
