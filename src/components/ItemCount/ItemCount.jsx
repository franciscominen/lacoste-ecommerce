import React, { useState } from "react";
import './style.scss';
/* import {cartContext} from '../../context/CartContext' */

const ItemCount = ({ addItemToCart, stock  }) => {

  const [contador, setContador] = useState(1);

  const incrementar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const decrementar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };
  const handlerOnAdd = () => {
    addItemToCart(contador);
  };

  return (
    <>
    <div>
      <div className="buttonsCountContainer" s>
        <button onClick={() => {decrementar()}} className="stockBtn"> - </button>
        <p>{contador}</p>
        <button onClick={() => {incrementar(stock)}} className="stockBtn"> + </button>
      </div>
      <button onClick={handlerOnAdd} className="onAddBtn">
        Agregar <img src={"/img/CartWidget/CartIconAlt.svg"} style={{maxWidth:'35px', marginLeft:'10px'}}/>
      </button>
    </div>
    </>
  )
};
export default ItemCount;

/* const ItemCount = ({
  initial = 1,
  stock,
  item,
  onBuy = () => {},
  design = 1,
}) => {
  const { cartItems, addItemToCart, removeItem } = useContext(cartContext);
  const [count, setCount] = useState(initial)
  const [noStock, setNoStock] = useState(false)

  useEffect(() => setNoStock(count >= stock), [count])

  const handleIncrementCounter = () => setCount(count < stock && count >= 0 ? count + 1 : count)
  const handleDecrementCounter = () => setCount(count <= stock && count > 0 ? count - 1 : count)

  const handleCount = () => {
    const itemsArr = cartItems.filter((element) => element.id === item.id)
    return itemsArr.length
  }
} */