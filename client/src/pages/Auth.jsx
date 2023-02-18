import React, { useContext, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import Row from 'react-bootstrap/Row';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, HOME_ROUTE } from '../utils/consts';
import { login, registration } from '../http/userAPI';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';


const Auth = observer(() => {
 const {user} = useContext(Context)
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(user)
            user.setIsAuth(true)
           navigate(HOME_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
        console.log(user)
    }

    return (
        <Container
            className='d-flex justify-content-center align-items-center'
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className='p-5'>
                <h2 className='m-auto'>
                    {isLogin ? 'Авторизация' : 'Регестрация'}
                </h2>
                <Form className='d-flex flex-column'>
                    <Form.Control
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                        className='mt-3'
                        placeholder='Введите ваш email...'
                    />
                    <Form.Control
                             value={password}
                             onChange={(e) => setPassword(e.target.value)}
                        className='mt-3'
                        placeholder='Введите ваш пароль...'
                        type="password"
                    />
                    <Row className='d-flex justify-content-between mt-3 pl-3 pr-3'>
                        {isLogin ? (
                            <div style={{ width: 300 }}>
                                Нет аккаунта?
                                <NavLink to={REGISTRATION_ROUTE}>
                                    Зарегестрируйся!
                                </NavLink>
                            </div>
                        ) : (
                            <div style={{ width: 200 }}>   Есть аккаунт?{' '}
                            <NavLink to={LOGIN_ROUTE}>
                                Войдите!
                            </NavLink></div>
                        )}
                        <Button
                            variant={'outline-success'}
                            style={{ width: 120 }}
                            onClick={click}
                        >
                           {isLogin ? 'Войти' : 'Регестрация'}
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;
