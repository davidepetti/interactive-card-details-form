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
  margin-top: 120px;
  margin-left: 130px;
  width: 447px;
  height: 245px;
  background-image: url(${cardFront});
  background-repeat: no-repeat;
`;

const CardBack = styled.div`
  margin-top: 40px;
  margin-left: 200px;
  width: 447px;
  height: 245px;
  background-image: url(${cardBack});
  background-repeat: no-repeat;
`;

const Logo = styled.img`
  margin-top: 20px;
  margin-left: 25px;
`;

const CardNumber = styled.p`
  font-size: 25px;
  margin-top: 60px;
  letter-spacing: 5px;
  color: white;
  text-align: center;
`;

const CardHolder = styled.p`
  font-size: 12px;
  margin-top: 12px;
  letter-spacing: 4px;
  color: white;
  text-transform: uppercase;
  margin-left: 35px;
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ExpDate = styled.p`
  font-size: 12px;
  margin-top: 12px;
  letter-spacing: 4px;
  color: white;
  margin-right: 35px;
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
