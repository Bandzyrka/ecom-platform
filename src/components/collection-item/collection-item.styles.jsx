import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.div`
  width: 21vw;
  display: flex;
  flex-direction: column;
  height: 500px;
  align-items: center;
  position: relative;
  overflow: hidden;
  &:hover {
    .image {
      opacity: 0.9;
      transform: scale(1.2);
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 400px;
  display: none;
  &:active {
    transition: 1000s;
  }
`;

export const BackgroundImage = styled.div`
  z-index: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  transition: 4s cubic-bezier(.17,.91,.89,.75);
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  background-color: white;
  z-index: 1;
`;

export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
  width: 10%;
  text-align: right;
`;