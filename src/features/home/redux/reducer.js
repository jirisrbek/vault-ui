import initialState from './initialState';
import { reducer as changeSecretsListPathReducer } from './changeSecretsListPath';
import { reducer as changeSecretsListFilterReducer } from './changeSecretsListFilter';
import { reducer as changeSelectedSecretReducer } from './changeSelectedSecret';

const reducers = [
  changeSecretsListPathReducer,
  changeSecretsListFilterReducer,
  changeSelectedSecretReducer,
];

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    // Handle cross-topic actions here
    default:
      newState = state;
      break;
  }
  /* istanbul ignore next */
  return reducers.reduce((s, r) => r(s, action), newState);
}
