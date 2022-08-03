import { createSelector } from "reselect";
import { DirectoryState } from "./directory.reducer";
import { RootState } from "../store";

const selectDirectory = (state: RootState): DirectoryState => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);
