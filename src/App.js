import { useState, createContext } from 'react';
import styled from 'styled-components';
import './App.css';
import CardForm from './CardForm';
import CardPreview from './CardPreview';
import CardSubmitted from './CardSubmitted';

export const AppContext = createContext(null);

function App() {
  const [card, setCard] = useState({});
  const [submitted, setSubmitted] = useState(false);

  return (
    <AppContext.Provider value={{ card, setCard, submitted, setSubmitted }}>
      <Container>
        <CardPreview />
        {submitted ? <CardSubmitted /> : <CardForm />}
      </Container>
    </AppContext.Provider>
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
