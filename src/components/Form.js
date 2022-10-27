const Form = (props) => {
  const { bill, selectedTip, numOfPeople } = props.formData;
  const changeBill = ({ target }) => {
    props.onBillChange(target.value);
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
        <div className="select-tip__percentage">5%</div>
        <div className="select-tip__percentage">10%</div>
        <div className="select-tip__percentage">15%</div>
        <div className="select-tip__percentage">25%</div>
        <div className="select-tip__percentage">50%</div>
        <div className="select-tip__percentage">
          <input type="text" placeholder="Custom" id="custom-percentage" />
        </div>
        <div className="numOfPeople">
          <label htmlFor="numOfPeople">
            <h3 className="section-header">Number of People</h3>
          </label>
          <input type="text" name="numOfPeople" id="numOfPeople" />
        </div>
      </div>
    </form>
  );
};

export default Form;
