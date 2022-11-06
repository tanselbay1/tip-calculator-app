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
          onChange={changeBill}
          value={bill}
          placeholder={0}
        />
      </div>
      <div className="select-tip">
        <h3 className="section-header">Select Tip %</h3>
        <div className="tip-wrapper">
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
        </div>
      </div>
      <div className="num-of-people">
        <label htmlFor="num-of-people">
          <h3 className="section-header">
            Number of People
            {numOfPeople && numOfPeople <= 0 && (
              <span className="error-message">Can't be zero</span>
            )}
          </h3>
        </label>
        <input
          type="text"
          name="num-of-people"
          id="num-of-people"
          onChange={changeNumOfPeople}
          value={numOfPeople}
          placeholder={0}
        />
      </div>
    </form>
  );
};

export default Form;
