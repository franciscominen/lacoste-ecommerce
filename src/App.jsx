import 'semantic-ui-css/semantic.min.css';
import './App.scss';
import NavbarComponent from './components/Navbar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
// import CartContainer from './containers/CartContainer'; 
import  {BrowserRouter, Switch, Route} from 'react-router-dom';
import {CartProvider} from "./context/CartContext";
import CartComponent from './components/Cart/Cart';
import CartContainer from './containers/CartContainer';
import Home from './layout/Home';


const App = () => {
  
  return (
    <>
        <BrowserRouter>

          <CartProvider>

            <NavbarComponent/>

              <Switch>

                <Route exact component={Home} path="/"/>
                
                <Route exact component={ItemListContainer} path="/catalogo" />

                <Route exact component={ItemListContainer} path="/category/:categoriaId" />

                <Route exact component={ItemDetailContainer} path="/product/:id" />

                <Route exact component={CartContainer} path="/cart"> 

                </Route>

              </Switch>

          </CartProvider>  

        </BrowserRouter>
    </>
  );
}

export default App;