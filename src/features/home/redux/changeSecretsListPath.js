// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  HOME_CHANGE_SECRETS_LIST_PATH,
} from './constants';

export function changeSecretsListPath(path) {
  return {
    type: HOME_CHANGE_SECRETS_LIST_PATH,
    path: path,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case HOME_CHANGE_SECRETS_LIST_PATH:
      return {
        ...state, secretsListPath: action.path,
      };

    default:
      return state;
  }
}
