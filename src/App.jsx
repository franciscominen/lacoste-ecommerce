import './App.scss';
import NavbarComponent from './components/Navbar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import CartContainer from './containers/CartContainer'; 
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {
  
  return (
    <>
      <Router>
        <NavbarComponent />
        <Switch>
          
          <Route exact component={ItemListContainer} path="/" />
          
          <Route exact component={ItemDetailContainer} path="/product/:id" />

          <Route exact component={CartContainer} path="/cart" />

        </Switch>
      </Router>
    </>
  );
}

export default App;