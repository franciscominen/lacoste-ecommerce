import styles from "./navbar.module.scss";
import LogoNav from "./img/LogoNav.svg";
import SearchIcon from "@material-ui/icons/Search";
import Divider from "@material-ui/core/Divider";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import CartWidgetComponent from "../CartWidget/index";
import LoginIcon from "./img/LoginIcon.svg";
import MapIcon from "./img/MapIcon.svg";

const NavbarComponent = () => {
  return (
    <>
      <nav>
        
        <img src={LogoNav} style={{maxWidth:'200px'}}/>
      
        <ul className={styles.categorias}>
          <li>
            <a href="" className={styles.categoria}>Novedades</a>
          </li>
          <li>
            <a href="" className={styles.categoria}>Mujer <ExpandMoreRoundedIcon/> </a>
          </li>
          <li>
            <a href="" className={styles.categoria}>Hombre <ExpandMoreRoundedIcon/> </a>
          </li>
          <li>
            <a href="" className={styles.categoria}>Niños <ExpandMoreRoundedIcon/> </a>
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
            <img src={LoginIcon} style={{maxWidth:'40px', margin:'0 10px'}} />
          </li>
          <li>
            <img src={MapIcon} style={{maxWidth:'28px'}} />
          </li>
        </ul>

      </nav>
    </>
  );
} 

export default NavbarComponent;