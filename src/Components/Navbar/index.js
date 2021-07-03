import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './nav.module.css'

const Navbar = () => {
    return (
        <div className={style['container']}>
            <div className={style['container-nav_content']}>
                <div className={style['menu']}>
                    <ul>
                    <li>
                            <NavLink 
                                to='/'
                                activeClassName={style['activeLink']}
                                className={style['link']}
                                exact
                                >
                                    Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/about'
                                activeClassName={style['activeLink']}
                                className={style['link']}
                                exact
                                >
                                    About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/portfolio' 
                                activeClassName={style['activeLink']}
                                className={style['link']}
                                exact
                            >
                                Portfolio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/resume' 
                                activeClassName={style['activeLink']}
                                className={style['link']}
                                exact
                            >
                                Resume
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/contacts' 
                                activeClassName={style['activeLink']}
                                className={style['link']}
                                exact
                            >
                                Contacts
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className={style['copyright']}>
                    <p className={style['text']}>Created by Christina Kolitvinova</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar
