import './header.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header>
            <Link className='logo' to="/">EconoMAX</Link>
            <Link className='compras' to="/compras/:id"> Minhas Compras</Link>
            <Link className='produtos' to="/produtos/:id"> Produtos</Link>
        </header>
    )
}

export default Header;