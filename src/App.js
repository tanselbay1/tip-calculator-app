import { useState, useEffect } from "react";
import Form from "./components/Form";

function App() {
  const [enteredData, setEnteredData] = useState({
    bill: "",
    selectedTip: "",
    numOfPeople: "",
  });

  const changeBill = (enteredBill) => {
    console.log(enteredBill);
    setEnteredData((previousData) => {
      return { ...previousData, bill: enteredBill };
    });
  };

  // const calculateTipAmount = () => {};
  const calculateTotal = (bill, tip, numOfPeople) => {
    const fixedTip = tip / 100;
    const billPlusTip = (bill *= fixedTip);
    return billPlusTip / numOfPeople;
  };

  useEffect(() => {
    console.log(enteredData);
  });

  return (
    <div>
      <h1>
        SPLI
        <br />
        TTER
      </h1>
      <Form onBillChange={changeBill} formData={enteredData} />
    </div>
  );
}

export default App;
