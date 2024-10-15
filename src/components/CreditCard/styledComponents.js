// Style your elements here
import styled from 'styled-components'

export const MainComponent = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const CreditCardContainer = styled.div`
  text-align: center;
  background-color: #3b4b69;
  background-size: cover;
  height: 100vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const MainHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
`

export const HorizontalLine = styled.hr`
  width: 60%;
  border: 1.5px solid #ffd773;
`

export const CardContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  width: 90%;
  height: 300px;
  align-self: center;
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  padding-left: 20px;
`
export const CardNumberHeading = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 25px;
`

export const CardNumberName = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
`

export const PaymentMainContainer = styled.div`
  background-color: #ffffff;
  background-size: cover;
  height: 100vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const PaymentCard = styled.div`
  width: 90%;
  height: 200px;
  box-shadow: 0px 14px 16px 0px #bfbfbf;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const PaymentHeading = styled.h1`
  color: #475569;
  text-align: center;
`

export const InputNumber = styled.input`
  width: 80%;
  height: 30px;
  margin: 10px;
`
export const InputName = styled.input`
  color: #d3d9e0;
  width: 80%;
  height: 30px;
  margin: 10px;
`
