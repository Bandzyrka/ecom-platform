import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    `
  
export const LogoContainer = styled(Link)`
      height: 100%;
      width: 70px;
      padding: 25px;
    `
  
export const OptionsContainer = styled.div`
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    `
export const OptionLink = styled(Link)`
  position: relative;
  padding: 10px 15px;
  text-decoration: underline 0.15em rgba(0, 0, 0, 0);
  transition: text-decoration-color 300ms;
  cursor: pointer;
  
  &:hover {
    text-decoration-color: rgba(0, 0, 0, 1)
  }
  &:active {
    top: 2px
  }
`