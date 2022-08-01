import { createSelector } from 'reselect'
import { DirectoryState } from './directory.reducer';

const selectDirectory = (state): DirectoryState => state.directory;

export const selectDirectorySections = createSelector(
    [selectDirectory],
    directory => directory.sections
    );