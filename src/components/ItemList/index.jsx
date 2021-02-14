import React, { useState, useEffect } from "react";
import {ItemComponent} from "../Item/index";

export const ItemList = ({ items }) => {
  console.log(items);

  return (
    <>
      {items.map((item) => (
        <ItemComponent key={item.id} item={item} />
      ))}
    </>
  );
};