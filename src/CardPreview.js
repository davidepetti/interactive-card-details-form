import styled from 'styled-components';
import background from './images/bg-main-desktop.png';
import cardFront from './images/bg-card-front.png';
import cardBack from './images/bg-card-back.png';
import cardLogo from './images/card-logo.svg';

const Container = styled.div`
  width: 25%;
  height: 100%;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
`;

const CardFront = styled.div`
  margin-top: 15em;
  margin-left: 8em;
  width: 30em;
  height: 12em;
  background-image: url(${cardFront});
  background-repeat: no-repeat;
`;

const CardBack = styled.div`
  margin-top: 2em;
  margin-left: 13em;
  width: 30em;
  height: 12em;
  background-image: url(${cardBack});
  background-repeat: no-repeat;
`;

function CardPreview({ card }) {
  return (
    <Container>
      <CardFront>
        {/* <img src={cardLogo} /> */}
        <p>{card.number}</p>
        <p>{card.holder}</p>
        <p>{card.expMonth}</p>
        <p>{card.expYear}</p>
      </CardFront>
      <CardBack>
        <p>{card.cvc}</p>
      </CardBack>
    </Container>
  );
}

export default CardPreview;
