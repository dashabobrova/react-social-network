import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>
            <img alt='img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/2048px-BMW_logo_%28gray%29.svg.png'/>

            <div className={s.loginBlock}>
                
                {
                    props.isAuth ? props.login : <NavLink to='/login'>Login</NavLink>
                }
                
            </div> 
        
        </header>
    )
}

export default Header;