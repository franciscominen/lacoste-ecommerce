import './App.scss';
import NavbarComponent from './components/Navbar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import CartContainer from './containers/CartContainer'; 
import  {BrowserRouter, Switch, Route} from 'react-router-dom';
import CartContext from "./context/CartContext";
import CartComponent from './components/Cart/Cart';

const App = () => {
  
  return (
    <>
        <BrowserRouter>

          <CartContext>

              <NavbarComponent />

              <Switch>
                
                <Route exact component={ItemListContainer} path="/" />

                <Route exact component={ItemListContainer} path="/category/:categoriaId" />

                <Route exact component={ItemDetailContainer} path="/product/:id" />

                <Route exact component={CartComponent} path="/cart" />

              </Switch>

          </CartContext>  

        </BrowserRouter>
    </>
  );
}

export default App;