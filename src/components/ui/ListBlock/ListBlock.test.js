import React from 'react';
import renderer from 'react-test-renderer';
import ListBlock from './ListBlock';

it('renders correctly', () => {
    const tree = renderer.create(<ListBlock />).toJSON();
    expect(tree).toMatchSnapshot();
  });