import 'semantic-ui-css/semantic.min.css';
import './App.scss';
import 'pure-react-carousel/dist/react-carousel.es.css';
import NavbarComponent from './components/Navbar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import  {BrowserRouter, Switch, Route} from 'react-router-dom';
import {CartProvider} from "./context/CartContext";
import CartComponent from "./components/Cart/Cart";
import CheckoutComponent from "./components/Cart/ClientForm/ClientForm";
import PagoForm from "./components/Cart/PagoForm";
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

                <Route exact component={ItemListContainer} path="/categories/:categoriaId" />

                <Route exact component={ItemDetailContainer} path="/item/:id" />

                <Route exact component={CartComponent} path="/cart" /> 
                
                <Route exact component={CheckoutComponent} path="/clientform" /> 
                
                <Route exact component={PagoForm} path="/pago" /> 
       
              </Switch>

          </CartProvider>  

        </BrowserRouter>
    </> 
  );
}

export default App;