import React, { useEffect, useState } from "react";

import Card from "./components/Card/Card";
import Inputform from "./components/Inputform/Inputform";
import Tip from "./components/Tip/Tip";
import "./App.css";
import logo from "./images/logo.svg";

function App() {
  // forminput states
  const [tipVal, setTipVal] = useState("");
  const [tipError, setTipError] = useState(false);

  const [billVal, setBillVal] = useState("");
  const [billError, setBillError] = useState(false);

  const [peopleVal, setPeopleVal] = useState("");
  const [peopleError, setPeopleError] = useState(false);

  const [reset, setReset] = useState(false);

  // states for display

  const [tip, setTip] = useState(0);
  const [totalTip, setTotalTip] = useState(0);
  const [totalAmt, setTotalAmt] = useState(0);

  const [completed, setCompleted] = useState(false);

  // regex for number and/or decimal place number
  const regex = /^\d+(?:\.\d+)?$/;

  // input validity checker
  const inputChecker = (value, setValue, setError) => {
    if (regex.test(value) && parseFloat(value) > 0) {
      setValue(parseFloat(value));
      setError(false);
    } else if (value === "") {
      setError(false);
      setValue("");
    } else {
      setError(true);
    }
  };

  const tipHandler = (val) => {
    inputChecker(val, setTipVal, setTipError);
  };
  const billHandler = (val) => {
    inputChecker(val, setBillVal, setBillError);
  };
  const peopleHandler = (val) => {
    inputChecker(val, setPeopleVal, setPeopleError);
  };

  useEffect(() => {
    if (billVal && tipVal && peopleVal) {
      const tip = (billVal * tipVal) / 100;
      setTip(tip / peopleVal);
      const total = billVal + tip;
      setTotalTip(total / peopleVal);
      setCompleted(true);
      const amt = total / peopleVal;
      setTotalAmt(amt * peopleVal);
      setReset(false);
    } else if (tipVal) {
      setReset(false);
    } else {
      setCompleted(false);
    }
  }, [tipVal, billVal, peopleVal, completed]);

  const resetAll = () => {
    setBillVal("");
    setTipVal("");
    setPeopleVal("");
    setTip(0);
    setTotalTip(0);
    setTotalAmt(0);
    setReset(true);
  };

  return (
    <>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <Card>
        <Inputform
          tip={tipHandler}
          tipError={tipError}
          bill={billHandler}
          billError={billError}
          people={peopleHandler}
          peopleError={peopleError}
          billValue={billVal}
          peopleValue={peopleVal}
          tipValue={tipVal}
          reset={reset}
        />
        <Tip
          tip={tip}
          totalTip={totalTip}
          totalAmt={totalAmt}
          completed={completed}
          resetAll={resetAll}
        />
      </Card>
    </>
  );
}

export default App;
