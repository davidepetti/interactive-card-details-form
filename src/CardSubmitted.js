import styled from 'styled-components';
import iconComplete from './images/icon-complete.svg';

const Container = styled.div`
  width: 75%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  width: 430px;
  height: 60px;
  border-radius: 11px;
  font-size: 18px;
  margin-top: 40px;
  color: white;
  background-color: hsl(278, 68%, 11%);

  :hover {
    cursor: pointer;
  }
`;

function CardSubmitted({ setCard, setSubmitted }) {
  return (
    <Container>
      <img src={iconComplete}></img>
      <h1>THANK YOU!</h1>
      <p>We've added your card details</p>
      <Button
        onClick={() => {
          setCard({});
          setSubmitted(false);
        }}
      >
        Continue
      </Button>
    </Container>
  );
}

export default CardSubmitted;
