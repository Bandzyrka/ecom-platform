import React, { useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

import CollectionPage from "../collection/collection.component";
import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";

export const ShopPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  });

  return (
    <Routes>
      <Route index element={<CollectionOverviewContainer />} />
      <Route path=":category" element={<CollectionPage />} />
    </Routes>
  );
};

export default ShopPage;
