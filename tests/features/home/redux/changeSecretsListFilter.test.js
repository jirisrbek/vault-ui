import {
  HOME_CHANGE_SECRETS_LIST_FILTER,
} from '../../../../src/features/home/redux/constants';

import {
  changeSecretsListFilter,
  reducer,
} from '../../../../src/features/home/redux/changeSecretsListFilter';

describe('home/redux/changeSecretsListFilter', () => {
  it('returns correct action by changeSecretsListFilter', () => {
    expect(changeSecretsListFilter()).toHaveProperty('type', HOME_CHANGE_SECRETS_LIST_FILTER);
  });

  it('handles action type HOME_CHANGE_SECRETS_LIST_FILTER correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_CHANGE_SECRETS_LIST_FILTER }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
