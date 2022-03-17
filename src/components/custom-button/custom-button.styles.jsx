import styled, { css } from 'styled-components'

const getButtonStyles = props => {
  switch (props.styles) {
    case 'googleButtonStyle':
      return googleButtonStyle
    case 'invertedButtonStyle':
      return invertedButtonStyle
    default:
      return defaultButtonStyle
  }
}

export const CustomButtonContainer = styled.button`
  position: relative;
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 25px 0 25px;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  ${getButtonStyles}
  
  &:active{
    top: 2px;
  }
`

const googleButtonStyle = css`
  background-color: #4285f4;
  color: white;
  &:hover {
    background-color: #357ae8;
    border: none;
  }
`
const invertedButtonStyle = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  
  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`
const defaultButtonStyle = css`
  background-color: black;
  color: white;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`
