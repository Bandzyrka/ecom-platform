import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;    
    `
  
export const LogoContainer = styled(Link)`
      height: 100%;
 
    svg{
      width: 40px;
      height: 40px;
    }
    `
  
export const OptionsContainer = styled.div`
      height: 100%;
      display: flex;
      align-items: center;
    `
export const OptionLink = styled(Link)`
  position: relative;
  padding: 5px 25px;
  text-decoration: underline 0.15em rgba(0, 0, 0, 0);
  transition: text-decoration-color 300ms;
  font-size: 1.2rem;
  cursor: pointer;
  
  &:hover {
    text-decoration-color: rgba(0, 0, 0, 1)
  }
  &:active {
    top: 2px
  }
`