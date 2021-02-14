import './App.scss';
import NavbarComponent from './components/Navbar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {
  
  return (
    <>
      <Router>
        <NavbarComponent />
        <Switch>
          
          <Route exact component={ItemListContainer} path="/" />
          
          <Route exact component={ItemDetailContainer} path="/product/:id" />

        </Switch>
      </Router>
    </>
  );
}

export default App;