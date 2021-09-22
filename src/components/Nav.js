import {Link} from 'react-router-dom'
const Nav = () => {
    return ( 
        <nav>
            <Link to="/">
            <img src="/img/logo.svg" alt="" />
            </Link>
        </nav>
     );
}
 
export default Nav;