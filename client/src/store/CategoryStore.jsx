import {makeAutoObservable} from "mobx";

export default class CategoryStore {
    constructor() {
        this._category = []
        this._definition = []
        makeAutoObservable(this)
    }


    setCategory(category) {
        this._category = category
    }

   
    get category() {
        return this._category
    }

  
}
