import React from 'react';
import { shallow } from 'enzyme';
import CommentOrRecommmendationBox from './CommentOrRecommmendationBox';

describe('<CommentOrRecommmendationBox />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<CommentOrRecommmendationBox comment={{key: '1', date: new Date(), value: ''}} comments={[]} setComments={() => true} />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
