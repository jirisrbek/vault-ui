// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  HOME_CHANGE_SELECTED_SECRET,
} from './constants';

export function changeSelectedSecret(path) {
  return {
    type: HOME_CHANGE_SELECTED_SECRET,
    path: path,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case HOME_CHANGE_SELECTED_SECRET:
      return {
        ...state, selectedSecret: action.path,
      };

    default:
      return state;
  }
}
