import React, { Component } from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss'

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sections: [
                {
                  title: 'hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'shop'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: 'shop'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'shop'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop',
                  // eslint-disable-next-line no-dupe-keys
                  size: 'large'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop',
                  // eslint-disable-next-line no-dupe-keys
                  size: 'large'
                }
              ]
              
        }
    }
    
    
    render() {
        return (
            <div className="directory-menu">
            {this.state.sections.map(({id, ...otherSecionProps}) => (
                    <MenuItem key={id} {...otherSecionProps} />
                ))}        
            </div>
        );
    }
}

export default Directory;