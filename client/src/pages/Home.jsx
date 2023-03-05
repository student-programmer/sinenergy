import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import Personal from '../components/Personal/Personal';
import { deletePersonal } from '../http/personalAPI';
import { fetchPersonal } from '../http/personalAPI';
import { Context } from '../index';
import home from './styles/home.module.css';

const Home = observer(() => {
	const { user } = useContext(Context);
	const { personal } = useContext(Context);
	const removePersonal = id => {
		deletePersonal(id);
		personal.setPersonal([]);
		personal.setRedy(false)
	};
	useEffect(() => {
		// fetchPersonal().then(data => console.log(data));
		fetchPersonal().then(data => personal.setPersonal(data));
	}, []);
	console.log(user.user.email);
	console.log(personal) 
	return (
		<div>
			{/* {personal.map(d => <div>{d.name}</div>)} */}
			{user.isAuth ? (
				<Personal />
			) : (
				<div>
					<h1
						style={{
							position: 'absolute',
							left: '50%',
							top: '50%',
							transform: 'translate(-50%, -50%)',
						}}
					>
						Войдите, чтобы посмотреть профиль.
					</h1>
				</div>
			)}
			<div className={home.info}>
				{' '}
				<p>{}</p>
				<div>
					{personal.isRedy ? (personal.personal.map(d => {
						return (
							<div key={d.id}>
								<div>Имя: {d.name}</div>
								<div>Номер: {d.phone}</div>
								<div>Почта: {d.email}</div>
								<div>Описание: {d.description}</div>
								<button onClick={() => removePersonal(d.id)}>Удалить</button>
							</div>
						);
					})) : <div>Заполните профиль</div>}
				</div>
			</div>
		</div>
	);
});

export default Home;
