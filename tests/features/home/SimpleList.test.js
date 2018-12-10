import React from 'react';
import { shallow } from 'enzyme';
import { SimpleList } from '../../../src/features/home';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<SimpleList />);
  expect(renderedComponent.find('.home-simple-list').length).toBe(1);
});
