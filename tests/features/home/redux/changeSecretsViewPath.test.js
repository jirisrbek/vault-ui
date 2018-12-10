import {
  HOME_CHANGE_SECRETS_VIEW_PATH,
} from '../../../../src/features/home/redux/constants';

import {
  changeSecretsViewPath,
  reducer,
} from '../../../../src/features/home/redux/changeSecretsViewPath';

describe('home/redux/changeSecretsViewPath', () => {
  it('returns correct action by changeSecretsViewPath', () => {
    expect(changeSecretsViewPath()).toHaveProperty('type', HOME_CHANGE_SECRETS_VIEW_PATH);
  });

  it('handles action type HOME_CHANGE_SECRETS_VIEW_PATH correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_CHANGE_SECRETS_VIEW_PATH }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
