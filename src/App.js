import { useState } from 'react';
import styled from 'styled-components';
import CardForm from './CardForm';
import CardPreview from './CardPreview';
import CardSubmitted from './CardSubmitted';

const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
  display: flex;
`;

function App() {
  const [card, setCard] = useState({});
  const [submitted, setSubmitted] = useState(false);

  return (
    <Container>
      <CardPreview card={card} />
      {submitted ? (
        <CardSubmitted />
      ) : (
        <CardForm card={card} setCard={setCard} setSubmitted={setSubmitted} />
      )}
    </Container>
  );
}

export default App;
