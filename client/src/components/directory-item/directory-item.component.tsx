import { FC } from "react";
import { useNavigate } from "react-router-dom";

import {
  DirectoryItemContainer,
  BackgroundImageContainer,
  ConentContainer,
  TitleContainer,
  SubtitleContainer,
} from "./directory-item.styles";
import { DirectoryCategory } from "../../redux/directory/directory.reducer";

export type DirectoryItemProps = {
  directory: DirectoryCategory;
};

export const DirectoryItem: FC<DirectoryItemProps> = ({ directory }) => {
  const { size, linkUrl, imageUrl, title } = directory;
  let navigate = useNavigate();
  return (
    <DirectoryItemContainer size={size} onClick={() => navigate(`${linkUrl}`)}>
      <BackgroundImageContainer
        className="background-image"
        imageUrl={imageUrl}
      />
      <ConentContainer className="content">
        <TitleContainer>{title.toUpperCase()}</TitleContainer>

        <SubtitleContainer>SHOP NOW!</SubtitleContainer>
      </ConentContainer>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
