import styled from "styled-components";

export const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  @media screen and (max-width: 800px) {
    margin: 5px 10px;
  }
  @media screen and (max-width: 1400px) {
    width: 95%;
  }
`;

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;
  &:last-child {
    width: 8%;
  }
`;

export const TotalContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;
export const WarningMessageContainer = styled.div`
  margin: 20px 10px;
  text-align: center;
  color: red;
`;
export const StripeCheckoutContainer = styled.div`
  margin: 20px 0;
  align-self: flex-end;
  transition: 2ms;
  &:hover {
    transform: scale(1.05);
    transition: 0.2s;
  }
`;
