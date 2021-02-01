import './style.scss';
import CartIcon from "../CartWidget/CartIcon.svg";

export const ItemCountComponent = ({stock, onAdd, contador, onSubstract, addCart}) => {
    return (
        <>
        
        <div className='itemCountContainer'>

            <div className='buttonsCountContainer'>
                <button className='buttonCount' style={{borderRight:'1px solid #00532C', borderRadius:'3px 0 0 3px'}} onClick={onSubstract} >-</button>
                <p className='count'>{contador}</p>
                <button className='buttonCount' style={{borderLeft:'1px solid #00532C', borderRadius:'0 3px 3px 0'}} onClick={() => { onAdd(stock) }} >+</button> 
            </div>

            <button onClick={addCart} className='buttonAddCart'>    
                Agregar <img src={CartIcon} style={{maxWidth:'45px', margin:'0 0 5px 5px'}} /> 
            </button> 

            <p style={{fontSize:'13px', marginTop:'15px', color:'gray'}}>En stock: {stock}</p>

        </div>

        </>
    );
};