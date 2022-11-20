import styled from 'styled-components';

const CardForm = ({ card, setCard }) => {
  return (
    <div>
      <form>
        <label>CARDHOLDER NAME</label>
        <input
          type='text'
          value={card.holder}
          autoFocus={'autofocus'}
          onChange={(e) => setCard({ ...card, holder: e.target.value })}
        />
        <label>CARD NUMBER</label>
        <input type='text' />
        <label>EXP. DATE (MM/YY)</label>
        <input type='number' min={1} max={12} />
        <input type='number' min={2022} max={9999} />
        <label>CVC</label>
        <input type='number' min={0} />
        <button>Confirm</button>
      </form>
    </div>
  );
};

export default CardForm;
