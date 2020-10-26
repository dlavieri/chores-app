import React from 'react';
import LoginForm from './LoginForm';
import { shallow } from 'enzyme';


test('LoginForm renders without crashing', () => {
    const wrapper = shallow(<LoginForm />);
    const login = wrapper.find({ "className": "login"});
    expect(login.length).toBe(1);
});
