import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE,  HOME_ROUTE, CATEGORY_ROUTE } from "./utils/consts"

import Auth from "./pages/Auth"
import Admin from "./pages/Admin"
import Home from "./pages/Home"
import Category from "./components/Category/Category"


export const authRouts = [
    {
        path: ADMIN_ROUTE,
        Component: <Admin/>
    },
    // {
    //     path: BASKET_ROUTE,
    //     Component: <Basket/>
    // },

]


export const publicRouts = [
    {
        path: HOME_ROUTE,
        Component: <Home/>
    },              
    {
        path: LOGIN_ROUTE,
        Component: <Auth/>
    },    {
        path: REGISTRATION_ROUTE,
        Component: <Auth/>
    }

]