import {useState} from 'react'

import {
  MainComponent,
  CreditCardContainer,
  MainHeading,
  HorizontalLine,
  CardContainer,
  CardNumberHeading,
  CardNumberName,
  PaymentMainContainer,
  PaymentCard,
  PaymentHeading,
  InputNumber,
  InputName,
} from './styledComponents'

const CreditCard = () => {
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')

  const onChangeNumber = event => {
    setNumber(event.target.value)
  }

  const onChangeName = event => {
    setName(event.target.value)
  }

  return (
    <MainComponent>
      <CreditCardContainer>
        <div>
          <MainHeading>CREDIT CARD</MainHeading>
          <HorizontalLine />
        </div>
        <CardContainer data-testid="creditCard">
          <CardNumberHeading>{number}</CardNumberHeading>
          <CardNumberName>CARDHOLDER NAME</CardNumberName>
          <CardNumberName>{name}</CardNumberName>
        </CardContainer>
      </CreditCardContainer>

      <PaymentMainContainer>
        <PaymentCard>
          <PaymentHeading>Payment Method</PaymentHeading>
          <InputNumber
            type="text"
            placeholder="Card Number"
            onChange={onChangeNumber}
            value={number}
          />
          <InputName
            type="text"
            placeholder="Cardholder Name"
            onChange={onChangeName}
            value={name}
          />
        </PaymentCard>
      </PaymentMainContainer>
    </MainComponent>
  )
}
export default CreditCard
