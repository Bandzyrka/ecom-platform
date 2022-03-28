import styled from 'styled-components'
import CustomButton from '../custom-button/custom-button.component'

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`

export const CartDropdownItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  ::-webkit-scrollbar {
  width: 5px;
  }
  ::-webkit-scrollbar-track {
  background: #f1f1f1; 
  }
  ::-webkit-scrollbar-thumb {
  background: #888; 
  }
  ::-webkit-scrollbar-thumb:hover {
  background: #555; 
  }
  `

export const CheckoutButton = styled(CustomButton)`
  margin-top: auto;
  `
CheckoutButton.displayName = 'CartDropdownButton';

export const EmptyMessage = styled.span`  
  font-size: 20px;
  margin: auto;
`
EmptyMessage.displayName = 'EmptyMessageContainer';


  