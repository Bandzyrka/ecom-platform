import React from 'react';
import { shallow } from 'enzyme';

import { CollectionPreview } from './collection-preview.component';

describe('CollectionPreview component', () => {
  let wrapper;

 
  const mockRouteName = 'hats';

  beforeEach(() => {
    
    const mockProps = {

      routeName: mockRouteName,
      title: 'hats',
      items: []
    };
    wrapper = shallow(<CollectionPreview {...mockProps} />);
  });

  it('should render CollectionPreview component', () => {
    expect(wrapper).toMatchSnapshot();
  });
}