import {makeAutoObservable} from "mobx";

export default class PersonalStore {
	constructor() {
		this._personal = {};
        this._redy = true
		makeAutoObservable(this);
	}

	setPersonal(personal) {
		this._personal = personal;
	}   
    setRedy(redy){
        this._redy = redy
    }

	get isRedy() {
		return this._redy;
	}
	get personal() {
		return this._personal;
	}
}
