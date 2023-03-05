import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserStore from './store/UserStore';
// import CategoryStore from './store/PersonalStore';
import PersonalStore from './store/PersonalStore';

export const Context = createContext(null)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<Context.Provider
		value={{
			user: new UserStore(),
			personal: new PersonalStore(),
		}}
	>
		{' '}
		<App />
	</Context.Provider>
);


