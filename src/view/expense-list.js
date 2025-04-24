import { AbstractComponent } from "../framework/view/abstract-component";

export class ExpenseListView extends AbstractComponent{
    constructor() {
        super();
        this.element = document.createElement('ul');
        this.element.className = 'expense-list';
    }

    addItem(itemElement) {
        this.element.appendChild(itemElement);
    }

    clear() {
        this.element.innerHTML = '';
    }
}