import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.components";
import { useParams } from "react-router-dom";

import {
  selectIsCollectionFetching,
  selectCollectionsForPreview,
} from "../../redux/shop/shop.selectors";

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from "./collection.styles";

type CategoryRouteParams = {
  category: string;
};

export const CollectionPage = () => {
  const { category } = useParams<
    keyof CategoryRouteParams
  >() as CategoryRouteParams;
  const categoriesMap = useSelector(selectCollectionsForPreview);
  const isLoading = useSelector(selectIsCollectionFetching);
  const [items, setItems] = useState(categoriesMap[category]);
  useEffect(() => {
    setItems(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <CollectionPageContainer>
      <CollectionTitle>{category}</CollectionTitle>
      {!isLoading ? (
        <CollectionItemsContainer>
          {items &&
            items.map((item) => <CollectionItem key={item.id} item={item} />)}
        </CollectionItemsContainer>
      ) : (
        <div>loading</div>
      )}
    </CollectionPageContainer>
  );
};

export default CollectionPage;
