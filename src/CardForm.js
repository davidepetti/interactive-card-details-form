import styled from 'styled-components';

const CardForm = ({
  holder,
  number,
  expMonth,
  expYear,
  cvc,
  setHolder,
  setNumber,
  setExpMonth,
  setExpYear,
  setCvc,
  setSubmitted,
}) => {
  return (
    <div>
      <form>
        <label>CARDHOLDER NAME</label>
        <input
          type='text'
          value={holder}
          onChange={(e) => setHolder(e.target.value)}
        />
        <label>CARD NUMBER</label>
        <input
          type='text'
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <label>EXP. DATE (MM/YY)</label>
        <input type='number' min={1} max={12} />
        <input type='number' min={2022} max={9999} />
        <label>CVC</label>
        <input type='number' min={0} />
        <button onClick={() => setSubmitted(true)}>Confirm</button>
      </form>
    </div>
  );
};

export default CardForm;
