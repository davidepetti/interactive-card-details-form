import { useState } from 'react';
import styled from 'styled-components';
import CardForm from './CardForm';
import CardPreview from './CardPreview';

function App() {
  const [card, setCard] = useState({});

  const Container = styled.div`
    width: 1920px;
    margin: 0 auto;
    display: flex;
  `;

  return (
    <Container>
      <CardPreview card={card} />
      <CardForm card={card} setCard={card} />
    </Container>
  );
}

export default App;
