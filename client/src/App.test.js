import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

test('App renders without crashing', () => {
  const wrapper = shallow(<App/>)
  const app = wrapper.find({"className": "app"});
  expect(app.length).toBe(1);
});
