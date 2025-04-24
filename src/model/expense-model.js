import { mockExpenses } from "../mock/expenses.js";

export default class ExpenseModel {
    #boardExps = [];
    #observers = [];

    constructor() {
        this.#boardExps = mockExpenses;
    }

    get exps() {
        return this.#boardExps;
    }

    addExpense(expenseData) {
        const newExp = {
            id: Date.now(),
            ...expenseData
        };
        this.#boardExps.push(newExp);
        this._notifyObservers();
        return newExp;
    }

    removeExpense(id) {
        this.#boardExps = this.#boardExps.filter(exp => exp.id !== id);
        this._notifyObservers();
    }

    addObserver(observer) {
        this.#observers.push(observer);
    }

    _notifyObservers() {
        this.#observers.forEach((observer) => observer());
    }
}