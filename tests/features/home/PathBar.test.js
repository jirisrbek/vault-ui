import React from 'react';
import { shallow } from 'enzyme';
import { PathBar } from '../../../src/features/home';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<PathBar />);
  expect(renderedComponent.find('.home-path-bar').length).toBe(1);
});
