import React from 'react';
import AddBtn from './AddBtn';
import { shallow } from 'enzyme';

test('App renders without crashing', () => {
  const wrapper = shallow(<AddBtn/>)
  const app = wrapper.find({"className": "add-btn"});
  expect(app.length).toBe(1);
});
