import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const CardForm = ({ card, setCard, setSubmitted }) => {
  return (
    <div>
      <form>
        <label>CARDHOLDER NAME</label>
        <input
          type='text'
          value={card.holder}
          onChange={(e) => setCard({ ...card, holder: e.target.value })}
        />
        <label>CARD NUMBER</label>
        <input
          type='text'
          value={card.number}
          onChange={(e) => setCard({ ...card, number: e.target.value })}
        />
        <label>EXP. DATE (MM/YY)</label>
        <input
          type='number'
          min={1}
          max={12}
          value={card.expMonth}
          onChange={(e) => setCard({ ...card, expMonth: e.target.value })}
        />
        <input
          type='number'
          min={2022}
          max={9999}
          value={card.expYear}
          onChange={(e) => setCard({ ...card, expYear: e.target.value })}
        />
        <label>CVC</label>
        <input
          type='number'
          min={0}
          value={card.cvc}
          onChange={(e) => setCard({ ...card, cvc: e.target.value })}
        />
        <button onClick={() => setSubmitted(true)}>Confirm</button>
      </form>
    </div>
  );
};

export default CardForm;
