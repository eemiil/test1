import { AbstractComponent } from '../framework/view/abstract-component.js';

export class ExpenseItemView extends AbstractComponent {
  constructor(expense, { onDelete }) {
    super();
    this._expense = expense;
    this._handleDelete = onDelete;
    
    this._setHandlers();
  }

  get template() {
    return `
      <li class="expense-item" data-id="${this._expense.id}">
        <span class="expense-name">${this._expense.name}</span>
        <span class="expense-amount">${this._expense.amount} руб.</span>
        <span class="expense-category">${this._expense.category}</span>
        <button class="delete-btn">×</button>
      </li>
    `;
  }

  _setHandlers() {
    const deleteBtn = this.getElement().querySelector('.delete-btn');
    if (deleteBtn) {
      deleteBtn.addEventListener('click', () => this._handleDelete(this._expense.id));
    }
  }
}