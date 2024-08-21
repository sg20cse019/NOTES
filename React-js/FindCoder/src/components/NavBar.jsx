// NavBar.jsx
import React from 'react';
import Button from './NavBar/Button';
import Logo from './NavBar/Logo';
import Menu from './NavBar/Menu';
import style from '../findcode.module.css';

const NavBar = () => {
    return (
        <div>
            <section id={style.nav}>
                <article>
                    <div className={style.Logo}> <Logo /> </div>
                    <div className={style.Menu}> <Menu /> </div>
                    <div className={style.Btn}> <Button /> </div>
                </article>
            </section>
        </div>
    );
};

export default NavBar;
