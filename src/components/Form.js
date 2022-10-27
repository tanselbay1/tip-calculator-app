const Form = (props) => {
  const { bill, selectedTip, numOfPeople } = props.formData;
  const changeBill = ({ target }) => {
    props.onBillChange(target.value);
  };

  const changeNumOfPeople = ({ target }) => {
    props.onNumOfPeopleChange(target.value);
  };

  const changeTip = ({ target }) => {
    props.onTipChange(target.value);
  };

  return (
    <form action="POST" onSubmit={(e) => e.preventDefault()}>
      <div className="bill">
        <label htmlFor="bill">
          <h3 className="section-header">Bill</h3>
        </label>
        <input
          type="text"
          name="bill"
          id="bill"
          placeholder="$"
          onChange={changeBill}
          value={bill}
        />
      </div>
      <div className="select-tip">
        <h3 className="section-header">Select Tip %</h3>
        <button
          className="select-tip__percentage"
          value={5}
          onClick={changeTip}
        >
          5%
        </button>
        <button
          className="select-tip__percentage"
          value={10}
          onClick={changeTip}
        >
          10%
        </button>
        <button
          className="select-tip__percentage"
          value={15}
          onClick={changeTip}
        >
          15%
        </button>
        <button
          className="select-tip__percentage"
          value={25}
          onClick={changeTip}
        >
          25%
        </button>
        <button
          className="select-tip__percentage"
          value={50}
          onClick={changeTip}
        >
          50%
        </button>
        <div className="select-tip__percentage">
          <input
            type="text"
            placeholder="Custom"
            id="custom-percentage"
            onChange={changeTip}
            value={selectedTip}
          />
        </div>
        <div className="numOfPeople">
          <label htmlFor="numOfPeople">
            <h3 className="section-header">Number of People</h3>
          </label>
          <input
            type="text"
            name="numOfPeople"
            id="numOfPeople"
            onChange={changeNumOfPeople}
            value={numOfPeople}
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
