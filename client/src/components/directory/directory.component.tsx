import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import { DirectoryState } from "../../redux/directory/directory.reducer";
import DirectoryItem from "../directory-item/directory-item.component";

import { DirectoryContainer } from "./directory.styles";

export const Directory = ({ sections }: DirectoryState) => (
  <DirectoryContainer>
    {sections.map((directory) => (
      <DirectoryItem key={directory.id} directory={directory} />
    ))}
  </DirectoryContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
