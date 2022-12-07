import styled from 'styled-components';

const Container = styled.div`
  width: 75%;
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 150px;
  margin-left: 350px;
`;

const Label = styled.label`
  color: hsl(278, 68%, 11%);
  padding-top: 20px;
  padding-bottom: 10px;
  padding-right: 80px;
`;

const Input = styled.input`
  width: 400px;
  height: 40px;
  border: 1px solid hsl(270, 3%, 87%);
  border-radius: 11px;
  padding: 15px;

  ::placeholder {
    font-size: 18px;
    color: hsl(270, 3%, 87%);
  }
`;

const MonthInput = styled.input`
  width: 75px;
  height: 33px;
  border: 1px solid hsl(270, 3%, 87%);
  border-radius: 11px;
  margin-right: 10px;
  padding: 15px;

  ::placeholder {
    font-size: 18px;
    color: hsl(270, 3%, 87%);
  }
`;

const YearInput = styled.input`
  width: 75px;
  height: 33px;
  border: 1px solid hsl(270, 3%, 87%);
  border-radius: 11px;
  margin-right: 10px;
  padding: 15px;

  ::placeholder {
    font-size: 18px;
    color: hsl(270, 3%, 87%);
  }
`;

const CvcInput = styled.input`
  width: 160px;
  height: 33px;
  border: 1px solid hsl(270, 3%, 87%);
  border-radius: 11px;
  margin-left: 10px;
  padding: 15px;

  ::placeholder {
    font-size: 18px;
    color: hsl(270, 3%, 87%);
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
`;

function CardForm({ card, setCard, setSubmitted }) {
  return (
    <Container>
      <Form>
        <Label>CARDHOLDER NAME</Label>
        <Input
          type='text'
          placeholder='e.g. Jane Appleseed'
          value={card.holder}
          onChange={(e) => setCard({ ...card, holder: e.target.value })}
        />
        <Label>CARD NUMBER</Label>
        <Input
          type='text'
          placeholder='e.g. 1234 5678 9123 0000'
          value={card.number}
          onChange={(e) => setCard({ ...card, number: e.target.value })}
        />
        <BottomLabels>
          <Label>EXP. DATE (MM/YY)</Label>
          <Label>CVC</Label>
        </BottomLabels>
        <BottomInputs>
          <MonthInput
            type='text'
            placeholder='MM'
            value={card.expMonth}
            onChange={(e) => setCard({ ...card, expMonth: e.target.value })}
          />
          <YearInput
            type='text'
            placeholder='YY'
            value={card.expYear}
            onChange={(e) => setCard({ ...card, expYear: e.target.value })}
          />
          <CvcInput
            type='text'
            placeholder='e.g. 123'
            value={card.cvc}
            onChange={(e) => setCard({ ...card, cvc: e.target.value })}
          />
        </BottomInputs>

        <Button onClick={() => setSubmitted(true)}>Confirm</Button>
      </Form>
    </Container>
  );
}

export default CardForm;
