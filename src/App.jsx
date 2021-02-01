import './App.scss';
import ItemCount from './components/ItemCount/index';
import NavbarComponent from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';

const App = () => {
  
  let stock = 10;
  const handleAdd = (counter) => {

    return () => {
      if(stock <= 0){
        alert('no hay stock')
      }else{
        alert(`Se van a agregar ${counter} items`)
      }
    }
    
  };

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