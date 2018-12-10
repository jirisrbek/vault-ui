import {
  HOME_CHANGE_SELECTED_SECRET,
} from '../../../../src/features/home/redux/constants';

import {
  changeSelectedSecret,
  reducer,
} from '../../../../src/features/home/redux/changeSelectedSecret';

describe('home/redux/changeSelectedSecret', () => {
  it('returns correct action by changeSelectedSecret', () => {
    expect(changeSelectedSecret()).toHaveProperty('type', HOME_CHANGE_SELECTED_SECRET);
  });

  it('handles action type HOME_CHANGE_SELECTED_SECRET correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_CHANGE_SELECTED_SECRET }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
