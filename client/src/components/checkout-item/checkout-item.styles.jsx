import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  line-height: 0px;
  @media screen and (max-width: 800px) {
    line-height: unset;
    padding: 0;
    font-size: 15px;
  }
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const TextContainer = styled.span`
  width: 23%;
`;

export const QuantityContainer = styled(TextContainer)`
  display: flex;
  span {
    margin: 0 10px;
    
  }
  div {
    cursor: pointer;
    &:hover{
        transform: scale(1.05);
        transition: 0.2s
      }
  }
`;
QuantityContainer.displayName = 'QuantityContainer';

export const RemoveButtonContainer = styled.div`
  padding-left: 22px;
  cursor: pointer;
  &:hover{
        transform: scale(1.05);
        transition: 0.1s
      }
`;
RemoveButtonContainer.displayName = 'RemoveButtonContainer';
