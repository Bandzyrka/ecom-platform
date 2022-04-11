import React from 'react';
import { shallow } from 'enzyme';

import { CartDropdown } from './cart-dropdown.component';
import CartItem from '../cart-item/cart-item.component';


describe('CartDropdown component', () => {
  let wrapper;
  
  let mockDispatch;
  const mockCartItems = [{ id: 1 }, { id: 2 }, { id: 3 }];

  beforeEach(() => {
    
    mockDispatch = jest.fn();

    const mockProps = {
      cartItems: mockCartItems,

      dispatch: mockDispatch
    };

    wrapper = shallow(<CartDropdown {...mockProps} />);
  });

  it('should render CartDropdown component', () => {
    expect(wrapper).toMatchSnapshot();
  });


  it('should render an equal number of CartItem components as the cartItems prop', () => {
    expect(wrapper.find(CartItem).length).toEqual(mockCartItems.length);
  });

  it('should render EmptyMessageContainer if cartItems is empty', () => {
    const mockProps = {
      cartItems: [],
      dispatch: mockDispatch
    };

    const newWrapper = shallow(<CartDropdown {...mockProps} />);
    expect(newWrapper.exists('EmptyMessageContainer')).toBe(true);
  });
});