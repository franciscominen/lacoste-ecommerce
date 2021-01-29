import './App.scss';
import NavbarComponent from './components/navbar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';

const App = () => {
  return (
    <>
      <section>

        <NavbarComponent />

        <ItemListContainer greeting={`Bienvenidos a LACOSTE.com`}/>

      </section>
    </>
  );
}

export default App;