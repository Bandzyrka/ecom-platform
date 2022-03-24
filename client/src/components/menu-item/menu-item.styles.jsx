import styled from 'styled-components'

export const MenuItemContainer = styled.div`
    height: ${({ size }) => (size ? '480px' : '300px')};
    min-width: 30%;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    overflow: hidden;
    &:hover
    {
      cursor: pointer;
      .background-image
      {
        transform: scale(1.2);
        transition: 6s cubic-bezier(0.075, 0.82, 0.165, 1);
      }
      .content
      {
        opacity: 0.9;
      }
    }
    &:first-child {
      margin-right: 7.5px;
    }
  
    &:last-child {
      margin-left: 7.5px;
    }
    
    @media screen and (max-width: 800px) {
        height: 200px;
    }
    `
export const BackgroundImageContainer = styled.div`
      width: 100%;
      height: 100%;
      background-position: center;
      background-size: cover;
      background-image: ${({ imageUrl }) => `url(${imageUrl})`};
      `    

  
export const ConentContainer = styled.div`
      height: 80px;
      padding: 0 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      border: 1px solid black;
      background-color: azure;
      opacity: 0.75;
      position: absolute;
      `
export const TitleContainer = styled.h1`
      font-weight: bold;
      margin-bottom: 6px;
      font-size: 20px;
      color: black;
      `
      
export const SubtitleContainer = styled.span`
      font-weight: lighter;
      font-size: 16px;
      `