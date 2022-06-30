import { Link } from "react-router-dom";
import LogoElement from "./../elements/LogoElement";
const Header = () => {
    return ( 
        <header>
            <LogoElement><Link to="/"> DevTools </Link></LogoElement>
        </header>
     );
}
 
export default Header;