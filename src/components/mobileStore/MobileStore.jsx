import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMobileData } from "../../store/slices/mobileStore-slice";
import Header from "../layout/Header";
import MobileList from "./MobileList";
const ProductsStore = () => {
  const { mobiles } = useSelector((state) => state.mobileStore);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMobileData());
  }, [dispatch]);

  return (
    <>
      <Header />
      <MobileList mobiles={mobiles} />
    </>
  );
};

export default ProductsStore;
