import { values } from 'lodash';

export const selectAllEvents = (state) => (
  values(state)
);
