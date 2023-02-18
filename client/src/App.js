import { BrowserRouter } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import { observer } from 'mobx-react-lite';
import { Context } from './index';
import { check } from './http/userAPI';
import Spiner from 'react-bootstrap/Spinner';

const App = observer(() => {
    const { user } = useContext(Context);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        check()
            .then((data) => {
                try{   user.setUser(true);
                    user.setIsAuth(true);
                }catch(e){
                    alert(e.response.data.message)
                    console.log(e)
                }
            })
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <Spiner animation={'grow'} />;
    }
    return (
        <BrowserRouter>
            <NavBar />
            <AppRouter />
        </BrowserRouter>
    );
});

export default App;