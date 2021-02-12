import React, { useState, useEffect } from "react";
import { ItemPromise } from "../../components/mocks/productList";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

const ItemDetailContainer = () => {

  const [detail, setDetail] = useState([])
  useEffect(() => {
    ItemPromise.then(resp => setDetail(resp));
  },[])

  return (
    <>
      <ItemDetail detail={detail}/>
    </>
  );

};

export default ItemDetailContainer;