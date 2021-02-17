import React, { useState, useEffect } from "react";
import {ItemCard} from "../ItemCard/ItemCard";

export const ItemList = ({ items }) => {
  console.log(items);

  return (
    <>
      {items.map((item) => (
        
        <ItemCard key={item.id} item={item} />
        
      ))}
    </>
  );
};