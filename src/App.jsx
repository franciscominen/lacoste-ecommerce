import 'semantic-ui-css/semantic.min.css';
import './App.scss';
import NavbarComponent from './components/Navbar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import CartContainer from './containers/CartContainer'; 
import  {BrowserRouter, Switch, Route} from 'react-router-dom';
import CartProvider from "./context/CartContext";
import CartComponent from './components/Cart/Cart';


const App = () => {
  
  return (
    <>
        <BrowserRouter>

          <CartProvider>

              <NavbarComponent />

              <Switch>
                
                <Route exact component={ItemListContainer} path="/" />

                <Route exact component={ItemListContainer} path="/category/:categoriaId" />

                <Route exact component={ItemDetailContainer} path="/product/:id" />

                <Route exact component={CartContainer} path="/cart" />

              </Switch>

          </CartProvider>  

        </BrowserRouter>
    </>
  );
}

export default App;