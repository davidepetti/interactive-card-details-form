import styled from 'styled-components';
import background from './images/bg-main-desktop.png';
import cardFront from './images/bg-card-front.png';
import cardBack from './images/bg-card-back.png';
import cardLogo from './images/card-logo.svg';

const Container = styled.div`
  width: 30%;
  height: 100%;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
`;

const CardFront = styled.div`
  position: relative;
  top: 15%;
  left: 30%;
  width: 447px;
  height: 245px;
  background-image: url(${cardFront});
  background-repeat: no-repeat;
`;

const CardBack = styled.div`
  position: relative;
  top: 18%;
  left: 50%;
  width: 447px;
  height: 245px;
  background-image: url(${cardBack});
  background-repeat: no-repeat;
`;

const Logo = styled.img`
  position: relative;
  top: 10%;
  left: 10%;
`;

const CardNumber = styled.p`
  font-size: 25px;
  position: relative;
  top: 20%;
  letter-spacing: 5px;
  color: white;
  text-align: center;
`;

const CardHolder = styled.p`
  font-size: 12px;
  position: relative;
  left: 10%;
  letter-spacing: 4px;
  color: white;
  text-transform: uppercase;
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  top: 20%;
`;

const ExpDate = styled.p`
  font-size: 12px;
  letter-spacing: 4px;
  color: white;
  position: relative;
  right: 10%;
`;

const CardCvc = styled.p`
  font-size: 15px;
  color: white;
  position: relative;
  top: 45%;
  left: 80%;
`;

function CardPreview({ card }) {
  return (
    <Container>
      <CardFront>
        <Logo src={cardLogo} />
        <CardNumber>{card.number}</CardNumber>
        <BottomContainer>
          <CardHolder>{card.holder}</CardHolder>
          {card.expMonth && card.expYear && (
            <ExpDate>{`${card.expMonth}/${card.expYear}`}</ExpDate>
          )}
        </BottomContainer>
      </CardFront>
      <CardBack>
        <CardCvc>{card.cvc}</CardCvc>
      </CardBack>
    </Container>
  );
}

export default CardPreview;
