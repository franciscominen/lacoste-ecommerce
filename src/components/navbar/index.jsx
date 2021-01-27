import logonav from './img/logonav.svg';
import SearchIcon from '@material-ui/icons/Search';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import Divider from '@material-ui/core/Divider';
import { Badge } from '@material-ui/core';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';


const NavbarComponent = () => {
  return (
    <>
      <nav>
        
        <img src={logonav}/>
      
        <ul className="categorias">
          <li>
            <a href="" className="categoria">Novedades</a>
          </li>
          <li>
            <a href="" className="categoria">Mujer <ExpandMoreRoundedIcon/> </a>
          </li>
          <li>
            <a href="" className="categoria">Hombre <ExpandMoreRoundedIcon/> </a>
          </li>
          <li>
            <a href="" className="categoria">Niños <ExpandMoreRoundedIcon/> </a>
          </li>
          <li>
            <a href="" className='sale'>SALE</a>
          </li>
          <li>
              <SearchIcon className='search-icon'/>
          </li>
        </ul>

        <ul className="cart-login">
          <li>
            <a href="">
            <Badge badgeContent={3} color='error'>
              <LocalMallOutlinedIcon/>
            </Badge>
            </a>
          </li>
          <Divider orientation="vertical" flexItem />
          <li>
            <a href=""><PermIdentityOutlinedIcon/></a>
          </li>
        </ul>

      </nav>
    </>
  );
} 

export default NavbarComponent;