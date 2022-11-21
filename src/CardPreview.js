import styled from 'styled-components';
import background from './images/bg-main-desktop.png';
import cardFront from './images/bg-card-front.png';
import cardBack from './images/bg-card-back.png';
import cardLogo from './images/card-logo.svg';

const CardPreview = ({ holder, number, expMonth, expYear, cvc }) => {
  const Container = styled.div`
    width: 25%;
    height: 100vh;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
  `;

  const CardFront = styled.div`
    margin-top: 200px;
    margin-left: 140px;
    width: 447px;
    height: 245px;
    background-image: url(${cardFront});
    background-repeat: no-repeat;
  `;

  const CardBack = styled.div`
    margin-top: 50px;
    margin-left: 240px;
    width: 447px;
    height: 245px;
    background-image: url(${cardBack});
    background-repeat: no-repeat;
  `;

  return (
    <Container>
      <CardFront>
        {/* <img src={cardLogo} /> */}
        <p>{number}</p>
        <p>{holder}</p>
        <p>{expMonth}</p>
        <p>{expYear}</p>
      </CardFront>
      <CardBack>
        <p>{cvc}</p>
      </CardBack>
    </Container>
  );
};

export default CardPreview;
