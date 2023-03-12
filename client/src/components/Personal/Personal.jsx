import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../..';
import { deletePersonal, fetchPersonal, personalCreate } from '../../http/personalAPI';
import con from './Personal.module.css'
const Personal = observer(() => {
    const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [description, setDescription] = useState('');
	const { personal } = useContext(Context);
	// Состояния для валидации
	const [emailDirty, setEmailDirty] = useState(false);
	const [nameDirty, setNameDirty] = useState(false);
	const [phoneDirty, setPhoneDirty] = useState(false);
	const [nameError, setNameError] = useState('Имя не может быть пустым');
	const [emailError, setEmailError] = useState('email не может быть пустым');
	const [phoneError, setPhoneError] = useState('Телефон не может быть пустым');

	// Создаём функции для изменения состояния имени и валидации имени.
	const changeName = (e) => {
		setName(e.target.value);
		const re = /^([а-я]{1}[а-яё]{3,23}|[a-z]{1}[a-z]{3,23})$/;
		if (!re.test(String(e.target.value).toLowerCase())) {
			setNameError('Некоректное имя');
		} else {
			setNameError('');
		}
	};

	// Создаём функции для изменения состояния имени и валидации email.
	const changeEmail = (e) => {
		setEmail(e.target.value);
		const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (!re.test(String(e.target.value).toLowerCase())) {
			setEmailError('Некоректный email');
		} else {
			setEmailError('');
		}
	};

	// Функци для изменения телефона и валидации телефона.
	const changeHandlerPhone = (e) => {
		setPhone(e.target.value);
		const re = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/;
		if (!re.test(String(e.target.value).toLowerCase())) {
			setPhoneError('Некоректный номер телефона');
		} else {
			setPhoneError('');
		}
	};
	// Функция для изменения описания.
	const changeHandlerDescription = e => {
		setDescription(e.target.value);
	};

	// Валидации всей формы и кнопки отправки
	const [formValid, setFormValid] = useState(false);
	useEffect(() => {
		if (emailError || phoneError || nameError) {
			setFormValid(false);
		} else {
			setFormValid(true);
		}
	}, [emailError, phoneError, nameError]);

	// Функция для отправки формы
	const submitData =  async(e) => {
		e.preventDefault()
 		await personalCreate( name, email, phone, description );
		// fetchPersonal().then(data => personal.setPersonal(data));
 		// personalCreate( name, email, phone, description ).then(data =>
		// 	personal.setPersonal(data)
		// );
		personal.setRedy(true)
		// personal.setPersonal({name, email, phone, description})
		// personal.setPersonal({ name, email, phone, description });
		setName('')
		setEmail('')
		setPhone('')
		setDescription('')
	}
useEffect(() => {
	fetchPersonal().then(data => personal.setPersonal(data));
}, []);

	const blurHandler = (e) => {
		switch (e.target.name) {
			case 'name':
				setNameDirty(true);
				break;
			case 'phone':
				setPhoneDirty(true);
				break;
			case 'email':
				setEmailDirty(true);
				break;
			default:
		}
	};
	return (
		<div className={con.wrapper}>
			<h2 className={con.personal_arcticle}>Личный кабинет</h2>
			<div className={con.login_box}>
				<form>
					{nameDirty && nameError && (
						<div className={con.error1}>{nameError}</div>
					)}
					<div className={con.user_box}>
						<input
							type='text'
							value={name}
							name='name'
							onChange={changeName}
							onBlur={e => blurHandler(e)}
							placeholder='Введите ваше имя:'
						/>
					</div>
					{emailDirty && emailError && (
						<div className={con.error2}>{emailError}</div>
					)}
					<div className={con.user_box}>
						<input
							type='text'
							value={email}
							name='email'
							onChange={changeEmail}
							onBlur={e => blurHandler(e)}
							placeholder='Введите ваш e-mail:'
						/>
					</div>
					{phoneDirty && phoneError && (
						<div className={con.error3}>{phoneError}</div>
					)}
					<div className={con.user_box}>
						<input
							onChange={changeHandlerPhone}
							onBlur={e => blurHandler(e)}
							type='text'
							value={phone}
							id=''
							name='phone'
							placeholder='Введите номер телефона:'
						/>
					</div>
					<div className={con.user_box}>
						<textarea
							className={con.facts}
							onChange={changeHandlerDescription}
							name='description'
							placeholder='Несколько интересных фактов о вас...'
							value={description}
						></textarea>
					</div>
					<button
						disabled={!formValid}
						type='submit'
						onClick={submitData}
						className={con.sends}
					>
						Отправить форму
					</button>
				</form>
			</div>
		</div>
	);
})

export default Personal