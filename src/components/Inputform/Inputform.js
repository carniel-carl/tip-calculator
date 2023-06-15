import React, { useState } from "react";
import "./Inputform.css";

// icons

import dollar from "./../../images/icon-dollar.svg";
import person from "./../../images/icon-person.svg";

const Inputform = ({
  tip,
  tipError,
  bill,
  billError,
  people,
  peopleError,
  billValue,
  tipValue,
  peopleValue,

  reset,
}) => {
  const [selectBtn, setSelectBtn] = useState(null);

  const handleSelect = (event, id) => {
    tip(event.target.value);
    setSelectBtn(id);
  };

  return (
    <div className="form-container">
      <div className="bill form-box">
        <label>Bill</label>
        <img src={dollar} alt="dollar sign" />
        <input
          type="number"
          name="bill-amount"
          onChange={(event) => bill(event.target.value)}
          className={billError ? "error" : null}
          value={billValue}
        />
      </div>

      <div className="tip-container">
        <span className="tip-title">Select Tips %</span>
        <div className="btn">
          <button
            onClick={(event) => handleSelect(event, 1)}
            value="5"
            className={selectBtn === 1 ? (reset ? null : "selected") : null}
          >
            5%
          </button>
          <button
            onClick={(event) => handleSelect(event, 2)}
            value="10"
            className={selectBtn === 2 ? (reset ? null : "selected") : null}
          >
            10%
          </button>
          <button
            onClick={(event) => handleSelect(event, 3)}
            value="15"
            className={selectBtn === 3 ? (reset ? null : "selected") : null}
          >
            15%
          </button>
          <button
            onClick={(event) => handleSelect(event, 4)}
            value="25"
            className={selectBtn === 4 ? (reset ? null : "selected") : null}
          >
            25%
          </button>
          <button
            onClick={(event) => handleSelect(event, 5)}
            value="50"
            className={selectBtn === 5 ? (reset ? null : "selected") : null}
          >
            50%
          </button>
          <input
            type="number"
            placeholder="Custom"
            onChange={(event) => handleSelect(event, 6)}
            value={selectBtn === 6 ? tipValue : null}
            className={`${selectBtn === 6 ? "focus" : null} ${
              tipError ? "error" : null
            }`}
          />
        </div>
      </div>

      <div className="form-box">
        <div className="people">
          <label>Number of People</label>
          {peopleError && (
            <span className="error">Can't be zero or alphabet</span>
          )}
        </div>
        <img src={person} alt="dollar sign" />
        <input
          type="number"
          name="people"
          onChange={(event) => people(event.target.value)}
          className={peopleError ? "error" : null}
          value={peopleValue}
        />
      </div>
    </div>
  );
};

export default Inputform;
