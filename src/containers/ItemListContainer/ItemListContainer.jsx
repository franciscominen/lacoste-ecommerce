import './ItemListContainer.scss';
import LogoBig from './LogoBig.svg';

const ItemListContainer = ({greeting}) => {
    return (
        <div className='items'>
            <img src={LogoBig} className='logoBig'/>
            <h1 className='greeting'>{greeting}</h1>
        </div>
    )
}

export default ItemListContainer