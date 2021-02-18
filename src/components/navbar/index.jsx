import "./styles.scss";
import SearchIcon from "@material-ui/icons/Search";
import CartWidgetComponent from "../CartWidget/index";
import { NavLink } from "react-router-dom";

const NavbarComponent = ({item}) => {

  return (
    <>
      <nav>

        <NavLink to={'/'}> <img src={"/img/Navbar/LogoNav.svg"} style={{maxWidth:'150px'}}/> </NavLink>
      
        <ul className='categorias'>
          <li>
            <NavLink to={`/category/${'novedades'}`} activeClassName='categoriaActive' className='categoria'> Novedades </NavLink>
          </li>
          <li>
            <NavLink to={`/category/${'mujer'}`} activeClassName='categoriaActive'  className='categoria'> Mujer </NavLink>
          </li>
          <li>
            <NavLink to={`/category/${'hombre'}`} activeClassName='categoriaActive' className='categoria'> Hombre </NavLink>
          </li>
          <li>
            <NavLink to={`/category/${'kids'}`} activeClassName='categoriaActive' className='categoria'> Niños </NavLink>
          </li>
          <li>
            <NavLink to={`/category/${'sale'}`} activeClassName='categoriaActive' className='categoria' style={{color:'red'}}> SALE </NavLink>
          </li>
          <li>
            <SearchIcon style={{color:'gray'}}/>
          </li>
        </ul>

        <ul className='cartLogin'>
          <li>
            <NavLink to={`/cart`}><CartWidgetComponent/></NavLink>
          </li>
          
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