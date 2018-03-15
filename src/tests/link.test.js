import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Adapter from "enzyme-adapter-react-16";
import toJson from 'enzyme-to-json';
configure({ adapter: new Adapter() });

import LandingPage from '../components/Landing';
import HomePage from '../components/Home';
import App from '../components/App';
import SignInPage from '../components/SignIn';
import * as routes from '../constants/routes';




test('Landing components should render as expected', () => {
  const component =shallow(<LandingPage />);
  expect(component.contains('Landing')).toBeTruthy;
  const tree=toJson(component);
  expect(tree).toMatchSnapshot();
});

test('should render the Landing component when visited', () => {
  const wrapper =mount(
    <MemoryRouter initialEntries={['/']} initialIndex={0}>
      <App />
    </MemoryRouter>
  )

  expect(wrapper.find(SignInPage).length).toBe(0);
  expect(wrapper.find(LandingPage)).toHaveLength(1);
});

test('should render the SignIn component when visited', () => {
  const wrapper =mount(
    <MemoryRouter initialEntries={['/signin']}>
      <App />
    </MemoryRouter>
  )

  //expect(wrapper.find(LandingPage)).toHaveLength(0);
  expect(wrapper.contains(SignInPage)).toBe(true);
});
