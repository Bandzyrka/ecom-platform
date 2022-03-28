import React from 'react';
import { shallow } from 'enzyme';
import SignInAndSignUp from './sign-in-and-sign-up.component';

it('should render SignInAndSignUp page', () => {
  expect(shallow(<SignInAndSignUp />)).toMatchSnapshot();
});   