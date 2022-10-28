import { useState, useEffect } from "react";
import Form from "./components/Form";
import Result from "./components/Result";

function App() {
  const [enteredData, setEnteredData] = useState({
    bill: "",
    selectedTip: "",
    numOfPeople: "",
  });

  const changeBill = (enteredBill) => {
    setEnteredData((previousData) => {
      return { ...previousData, bill: enteredBill };
    });
  };

  const changeNumOfPeople = (enteredPeople) => {
    setEnteredData((previousData) => {
      return { ...previousData, numOfPeople: enteredPeople };
    });
  };

  const changeTip = (enteredTip) => {
    setEnteredData((previousData) => {
      return { ...previousData, selectedTip: enteredTip };
    });
  };

  const calculateTipAmount = (bill, tip, numOfPeople) => {
    const fixedTip = tip / 100;
    const totalTip = bill * fixedTip;
    return totalTip / numOfPeople;
  };

  const calculateTotal = (bill, tip, numOfPeople) => {
    const fixedTip = tip / 100;
    // To escape from string concenation, bill parameter turn into a number
    const billPlusTip = bill * fixedTip + Number(bill);
    return billPlusTip / numOfPeople;
  };

  useEffect(() => {
    console.log(enteredData);
    const { bill, selectedTip, numOfPeople } = enteredData;
    if (bill !== 0 && selectedTip !== 0 && numOfPeople !== 0) {
      console.log(calculateTotal(bill, selectedTip, numOfPeople));
      console.log(calculateTipAmount(bill, selectedTip, numOfPeople));
    }
  });

  return (
    <div>
      <h1>
        SPLI
        <br />
        TTER
      </h1>
      <div className="card">
        <Form
          onBillChange={changeBill}
          onNumOfPeopleChange={changeNumOfPeople}
          onTipChange={changeTip}
          formData={enteredData}
        />
        <Result />
      </div>
    </div>
  );
}

export default App;
