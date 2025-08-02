import { Link } from 'react-router-dom';
import Logo from '../UI/Logo/Logo';
import './Header.css';
import { useState } from 'react';
import MyInput from '../UI/MyInput/MyInput';

const Header = () => {
    const [search, setSearch] = useState<string>("");

    return(
        <header className='shadow'>
            <div className='header-start'>
                <Logo className='header-item' />
                <Link className='header-item medium-text' to="/about">About</Link>
                <Link className='header-item medium-text' to="/about">Shop</Link>
            </div>
            <div className='header-center'>
                <MyInput 
                    className='header-item' 
                    text={search} 
                    setText={setSearch} 
                    placeholder='Search...'
                />
            </div>
            <div className='header-end'>
                <Logo className='header-item' />
            </div>
        </header>
    );
}

export default Header;
