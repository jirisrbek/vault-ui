import React from 'react';
import { shallow } from 'enzyme';
import { SecretsList } from '../../../src/features/home';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<SecretsList />);
  expect(renderedComponent.find('.home-secrets-list').length).toBe(1);
});
