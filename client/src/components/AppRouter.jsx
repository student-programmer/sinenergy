import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import {Routes, Route  } from "react-router-dom"
import { Context } from '../index'
import { authRouts, publicRouts } from '../routs'

const AppRouter = observer(() => {
 const { user } = useContext(Context)
 console.log(user)
    return (
        <Routes>
            {user.isAuth && authRouts.map(({path, Component}) => 
            <Route key = {path} path = {path} element={Component} exact/>
            )}
            {publicRouts.map(({path, Component}) => 
            <Route key = {path} path = {path} element={Component} exact/>
            )}

        </Routes>
    )
})
 
export default AppRouter
