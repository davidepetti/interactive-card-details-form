import { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import CardForm from './CardForm';
import CardPreview from './CardPreview';
import CardSubmitted from './CardSubmitted';

function App() {
  const [card, setCard] = useState({});
  const [submitted, setSubmitted] = useState(false);

  return (
    <Container>
      <CardPreview card={card} />
      {submitted ? (
        <CardSubmitted setCard={setCard} setSubmitted={setSubmitted} />
      ) : (
        <CardForm card={card} setCard={setCard} setSubmitted={setSubmitted} />
      )}
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
