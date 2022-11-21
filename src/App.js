import { useState } from 'react';
import styled from 'styled-components';
import CardForm from './CardForm';
import CardPreview from './CardPreview';
import CardSubmitted from './CardSubmitted';

function App() {
  const [holder, setHolder] = useState('');
  const [number, setNumber] = useState('');
  const [expMonth, setExpMonth] = useState('');
  const [expYear, setExpYear] = useState('');
  const [cvc, setCvc] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const Container = styled.div`
    width: 100vw;
    margin: 0 auto;
    display: flex;
  `;

  return (
    <Container>
      <CardPreview
        holder={holder}
        number={number}
        expMonth={expMonth}
        expYear={expYear}
        cvc={cvc}
      />
      {submitted ? (
        <CardSubmitted />
      ) : (
        <CardForm
          holder={holder}
          number={number}
          expMonth={expMonth}
          expYear={expYear}
          cvc={cvc}
          setHolder={setHolder}
          setNumber={setNumber}
          setExpMonth={setExpMonth}
          setExpYear={setExpYear}
          setCvc={setCvc}
          setSubmitted={setSubmitted}
        />
      )}
    </Container>
  );
}

export default App;
