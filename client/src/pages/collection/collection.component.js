import React from 'react';
import {  useSelector  } from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.components';
import { useParams } from 'react-router-dom';

import { selectCollection } from '../../redux/shop/shop.selectors';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection.styles';

export const CollectionPage = () => {
  const { category } = useParams();
  const collection = useSelector(selectCollection(category));
  const {title, items} = collection
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

export default CollectionPage;