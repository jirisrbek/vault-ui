import React from 'react';
import { shallow } from 'enzyme';
import { SecretsList } from '../../../src/features/home/SecretsList';

describe('home/SecretsList', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <SecretsList {...props} />
    );

    expect(
      renderedComponent.find('.home-secrets-list').length
    ).toBe(1);
  });
});
