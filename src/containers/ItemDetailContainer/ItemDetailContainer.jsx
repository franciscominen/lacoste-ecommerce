import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import itemsPromise from "../../components/mocks/productList";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    itemsPromise.then((resp) => {
      setItem(resp.find((li) => li.id === id));
    });
  }, []);
  console.log(item);
  return (
    <>item
      <ItemDetail item={item} />
    </>
  );
};

export default ItemDetailContainer;