const Result = ({ tipAmount, totalAmount, onReset, isTyping }) => {
  return (
    <div className="result">
      <div className="tip-amount">
        <div className="tip-amount__text">
          <h3 className="result__header">Tip Amount</h3>
          <p className="result__text">/ person</p>
        </div>
        <p className="amount__usd">${tipAmount}</p>
        {/* {tipAmount && "$0.00"} */}
      </div>
      <div className="total-amount">
        <div className="total-amount__text">
          <h3 className="result__header">Total</h3>
          <p className="result__text">/ person</p>
        </div>
        <p className="amount__usd">${totalAmount}</p>
      </div>
      <button
        type="reset"
        onClick={onReset}
        className={isTyping ? "typing" : null}
      >
        RESET
      </button>
    </div>
  );
};

export default Result;
