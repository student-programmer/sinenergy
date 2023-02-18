

import React, { useContext } from 'react';
import { Context } from '../index';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE} from '../utils/consts';
import {observer} from "mobx-react-lite"

const NavBar = observer(() => {
    const navigate = useNavigate()
    const { user } = useContext(Context);
    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }
    return (
        <Navbar bg='dark' variant='dark'>
            {/* <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>
                Купи дивайс
            </NavLink> */}
            <Container >
                {user.isAuth ? (
                    <Nav style={{left: 1100, position: 'relative'}}>
                        <Button className="mr-5" variant={'outline-light'} onClick={() => logOut()}>Выйти</Button>
                        <Button variant={'outline-light'} className="ml-5"  onClick={() => navigate(ADMIN_ROUTE)}style={{marginLeft: 5}}>Админ панель</Button>
                    </Nav>
                ) : (
                    <Nav style={{left: 1100, position: 'relative'}}>
                        <Button variant={'outline-light'} onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>
                )}
            </Container>
        </Navbar>
    );
});

export default NavBar;

