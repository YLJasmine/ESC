import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Adapter from "enzyme-adapter-react-16";
import toJson from 'enzyme-to-json';
configure({ adapter: new Adapter() });

import LandingPage from '../components/Landing';
import SignUpForm from '../components/SignUp';
/*
describe('Test Button component', () => {
  it('Test click event', () => {
    const mockCallBack = jest.fn();

    const button = shallow((<Button onClick={mockCallBack}>Ok!</Button>));
    button.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
*/
describe('Form', () => {
  const testValues = {
        email: 'asd',
        passwordOne: '12345',
        passwordTwo: '12345',
        selectedValue:'Student',
    };
  const mockCallBack = jest.fn();
  it('submit event when click submit', () => {

    var wrapper =mount(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <SignUpForm onSubmit={mockCallBack}/>
      </MemoryRouter>
    );
    console.log(wrapper.html());
    expect(wrapper.find({type:'submit'}).length).toBe(1);
    wrapper.find({type:'submit'}).simulate('submit');
    expect(mockCallBack).toHaveBeenCalledTimes(0);
  });

  it('throw error when input invalid', () => {
    var wrapper =mount(
      <MemoryRouter>
        <SignUpForm />
      </MemoryRouter>
    );
    const commitButton = wrapper.find('button');
    expect(commitButton.prop('disabled')).toBe(true);
    wrapper.setState(testValues);
    //wrapper.find({type:'text'}).simulate('change', {target: {value: 'asd'}});
    //wrapper.find({placeholder:'Password'}).simulate('change', {target: {value: '12345'}});
    //wrapper.find({placeholder:'Confirm Password'}).simulate('change', {target: {value: '12345'}});
    //wrapper.find('RadioGroup').simulate('change', {target: {selectedValue: 'Student'}});
    wrapper.find('button').simulate('change', {target: {disabled: false}});
    wrapper.update();
    console.log(wrapper.state());
    wrapper.find('button').simulate('submit');
    console.log(wrapper.html());
    expect(wrapper.find('button').prop('disabled')).toBe(false);
  });
});
