import styles from "./navbar.module.scss";
import SearchIcon from "@material-ui/icons/Search";
import Divider from "@material-ui/core/Divider";
import CartWidgetComponent from "../CartWidget/index";

const NavbarComponent = () => {
  return (
    <>
      <nav>
        
        <img src={"/img/Navbar/LogoNav.svg"} style={{maxWidth:'200px'}}/>
      
        <ul className={styles.categorias}>
          <li>
            <a href="" className={styles.categoria}>Novedades</a>
          </li>
          <li>
            <a href="" className={styles.categoria}>Mujer</a>
          </li>
          <li>
            <a href="" className={styles.categoria}>Hombre</a>
          </li>
          <li>
            <a href="" className={styles.categoria}>Niños</a>
          </li>
          <li>
            <a href="" className={styles.categoria} style={{color:'red'}}>SALE</a>
          </li>
          <li>
              <SearchIcon className={styles.searchIcon}/>
          </li>
        </ul>

        <ul className={styles.cartLogin}>
          <li>
            <CartWidgetComponent/>
          </li>
          <Divider orientation="vertical" flexItem />
          <li>
            <img src={"/img/Navbar/MapIcon.svg"} style={{maxWidth:'30px', margin:'5px 10px 0'}} />
          </li>
          <li>
            <img src={"/img/Navbar/LoginIcon.svg"} style={{maxWidth:'40px', margin:'5px 0 0'}} />
          </li>
        </ul>

      </nav>
    </>
  );
} 

export default NavbarComponent;