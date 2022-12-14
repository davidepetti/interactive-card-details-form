import { useState } from 'react';
import styled from 'styled-components';

function CardForm({ card, setCard, setSubmitted }) {
  const [holderError, setHolderError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [monthError, setMonthError] = useState(false);
  const [yearError, setYearError] = useState(false);
  const [cvcError, setCvcError] = useState(false);

  const handleCardNumberChange = (event) => {
    const inputVal = event.target.value.replace(/ /g, ''); // Remove all the empty spaces in the input
    let inputNumbersOnly = inputVal.replace(/\D/g, ''); // Get only digits

    if (inputNumbersOnly.length > 16) {
      //If entered value has a length greater than 16 then take only the first 16 digits
      inputNumbersOnly = inputNumbersOnly.substr(0, 16);
    }

    // Get nd array of 4 digits per an element EX: ["4242", "4242", ...]
    const splits = inputNumbersOnly.match(/.{1,4}/g);

    let spacedNumber = '';
    if (splits) {
      spacedNumber = splits.join(' '); // Join all the splits with an empty space
    }

    setCard({ ...card, number: spacedNumber });
  };

  const handleSubmitClick = (event) => {
    event.preventDefault();
    let error = false;

    if (!card.holder || card.holder === '') {
      setHolderError(true);
      error = true;
    } else {
      setHolderError(false);
    }

    if (!card.number || card.number === '') {
      setNumberError(true);
      error = true;
    } else {
      setNumberError(false);
    }

    if (!card.expMonth || card.expMonth === '') {
      setMonthError(true);
      error = true;
    } else {
      setMonthError(false);
    }

    if (!card.expYear || card.expYear === '') {
      setYearError(true);
      error = true;
    } else {
      setYearError(false);
    }

    if (!card.cvc || card.cvc === '') {
      setCvcError(true);
      error = true;
    } else {
      setCvcError(false);
    }

    if (!error) {
      setSubmitted(true);
    }
  };

  const setCardNumber = (num) => {
    if (num <= 12 && num >= 1) {
      setCard({ ...card, expMonth: num });
    }
  };

  return (
    <Container>
      <Form>
        <Label>CARDHOLDER NAME</Label>
        <InputContainer>
          <Input
            type='text'
            placeholder='e.g. Jane Appleseed'
            value={card.holder}
            onChange={(e) => setCard({ ...card, holder: e.target.value })}
            error={holderError}
          />
          {holderError && <Error>Can't be blank</Error>}
        </InputContainer>
        <Label>CARD NUMBER</Label>
        <InputContainer>
          <Input
            type='text'
            placeholder='e.g. 1234 5678 9123 0000'
            value={card.number}
            onChange={handleCardNumberChange}
            error={numberError}
          />
          {numberError && <Error>Can't be blank</Error>}
        </InputContainer>
        <BottomLabels>
          <Label>EXP. DATE (MM/YY)</Label>
          <Label>CVC</Label>
        </BottomLabels>
        <BottomInputs>
          <InputContainer>
            <MonthInput
              type='number'
              placeholder='MM'
              min={1}
              max={12}
              value={card.expMonth}
              onChange={(e) => setCardNumber(e.target.value)}
              error={monthError}
            />
            {monthError && <Error>Can't be blank</Error>}
          </InputContainer>
          <InputContainer>
            <YearInput
              type='number'
              placeholder='YY'
              min={0}
              max={99}
              value={card.expYear}
              onChange={(e) => setCard({ ...card, expYear: e.target.value })}
              error={yearError}
            />
            {yearError && <Error>Can't be blank</Error>}
          </InputContainer>
          <InputContainer>
            <CvcInput
              type='number'
              placeholder='e.g. 123'
              min={0}
              max={999}
              value={card.cvc}
              onChange={(e) => setCard({ ...card, cvc: e.target.value })}
              error={cvcError}
            />
            {cvcError && <Error>Can't be blank</Error>}
          </InputContainer>
        </BottomInputs>

        <Button onClick={handleSubmitClick}>Confirm</Button>
      </Form>
    </Container>
  );
}

export default CardForm;

const Container = styled.div`
  width: 75%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    height: 60%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    margin-top: 100px;
  }
`;

const Label = styled.label`
  color: hsl(278, 68%, 11%);
  padding-top: 20px;
  padding-bottom: 10px;
  padding-right: 80px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 15px;
  }
`;

const Input = styled.input`
  width: 400px;
  height: 40px;
  border: 1px solid hsl(270, 3%, 87%);
  border-color: ${(props) => (props.error ? 'red' : 'balck')};
  border-radius: 11px;
  padding: 15px;

  ::placeholder {
    font-size: 18px;
    color: hsl(270, 3%, 87%);
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 20px;

    ::placeholder {
      font-size: 12px;
      color: hsl(270, 3%, 87%);
    }
  }
`;

const MonthInput = styled.input`
  width: 75px;
  height: 33px;
  border: 1px solid hsl(270, 3%, 87%);
  border-radius: 11px;
  margin-right: 10px;
  border-color: ${(props) => (props.error ? 'red' : 'balck')};
  padding: 15px;

  ::placeholder {
    font-size: 18px;
    color: hsl(270, 3%, 87%);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 20px;

    ::placeholder {
      font-size: 12px;
      color: hsl(270, 3%, 87%);
    }
  }
`;

const YearInput = styled.input`
  width: 75px;
  height: 33px;
  border: 1px solid hsl(270, 3%, 87%);
  border-radius: 11px;
  margin-right: 10px;
  border-color: ${(props) => (props.error ? 'red' : 'balck')};
  padding: 15px;

  ::placeholder {
    font-size: 18px;
    color: hsl(270, 3%, 87%);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 20px;

    ::placeholder {
      font-size: 12px;
      color: hsl(270, 3%, 87%);
    }
  }
`;

const CvcInput = styled.input`
  width: 160px;
  height: 33px;
  border: 1px solid hsl(270, 3%, 87%);
  border-radius: 11px;
  border-color: ${(props) => (props.error ? 'red' : 'balck')};
  margin-left: 10px;
  padding: 15px;

  ::placeholder {
    font-size: 18px;
    color: hsl(270, 3%, 87%);
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 20px;

    ::placeholder {
      font-size: 12px;
      color: hsl(270, 3%, 87%);
    }
  }
`;

const BottomLabels = styled.div`
  display: flex;
`;

const BottomInputs = styled.div`
  display: flex;
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

  @media (max-width: 768px) {
    width: 300px;
    height: 40px;
    font-size: 14px;
    margin-top: 20px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Error = styled.span`
  font-size: 12px;
  letter-spacing: 1px;
  padding: 2px;
  margin-left: 8px;
  color: red;
`;
