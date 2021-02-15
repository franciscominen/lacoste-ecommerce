import styles from "./navbar.module.scss";
import SearchIcon from "@material-ui/icons/Search";
import Divider from "@material-ui/core/Divider";
import CartWidgetComponent from "../CartWidget/index";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <>
      <nav>

        <Link to={'/'}> <img src={"/img/Navbar/LogoNav.svg"} style={{maxWidth:'200px'}}/> </Link>
      
        <ul className={styles.categorias}>
          <li>
            <Link to={`/product/:categoryId`} className={styles.categoria}> Novedades </Link>
          </li>
          <li>
            <Link to={`/product/:categoryId`} className={styles.categoria}> Mujer </Link>
          </li>
          <li>
            <Link to={`/product/:categoryId`} className={styles.categoria}> Hombre </Link>
          </li>
          <li>
            <Link to={`/product/:categoryId`} className={styles.categoria}> Niños </Link>
          </li>
          <li>
            <Link to={`/product/:categoryId`} className={styles.categoria} style={{color:'red'}}> SALE </Link>
          </li>
          <li>
            <SearchIcon />
          </li>
        </ul>

        <ul className={styles.cartLogin}>
          <li>
            <CartWidgetComponent/>
          </li>
          <Divider orientation="vertical"/>
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