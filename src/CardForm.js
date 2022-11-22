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
