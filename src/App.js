import { useState, useEffect, useRef } from "react";
import Form from "./components/Form";
import Result from "./components/Result";

function App() {
  const [enteredData, setEnteredData] = useState({
    bill: "",
    selectedTip: "",
    numOfPeople: "",
  });
  const [calculatedTip, setCalculatedTip] = useState("$0.00");
  const [calculatedTotal, setCalculatedTotal] = useState("$0.00");
  const isMounted = useRef(false);

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

  useEffect(() => {
    const { bill, selectedTip, numOfPeople } = enteredData;

    // Prevent first render of useEffect
    if (isMounted.current) {
      // Escaping empty inputs
      if (bill !== "" && selectedTip !== "" && numOfPeople !== "") {
        setCalculatedTip(calculateTipAmount(bill, selectedTip, numOfPeople));
        setCalculatedTotal(calculateTotal(bill, selectedTip, numOfPeople));
      }
    } else {
      isMounted.current = true;
    }
  }, [enteredData, calculatedTip, calculatedTotal]);

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
        <Result tipAmount={calculatedTip} totalAmount={calculatedTotal} />
      </div>
    </div>
  );
}

export default App;
