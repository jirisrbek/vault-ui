import {
  HOME_CHANGE_SECRETS_LIST_PATH,
} from '../../../../src/features/home/redux/constants';

import {
  changeSecretsListPath,
  reducer,
} from '../../../../src/features/home/redux/changeSecretsListPath';

describe('home/redux/changeSecretsListPath', () => {
  it('returns correct action by changeSecretsListPath', () => {
    expect(changeSecretsListPath()).toHaveProperty('type', HOME_CHANGE_SECRETS_LIST_PATH);
  });

  it('handles action type HOME_CHANGE_SECRETS_LIST_PATH correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_CHANGE_SECRETS_LIST_PATH }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
