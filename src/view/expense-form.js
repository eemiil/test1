import { AbstractComponent } from '../framework/view/abstract-component.js';

export class ExpenseFormView extends AbstractComponent {
  constructor() {
    super();
    this._submitHandler = null;
    this._formData = {
      name: '',
      amount: 0,
      category: 'Еда'
    };
  }

  get template() {
    return `
      <div class="expense-form">
        <h2>Добавить расходы</h2>
        <form id="expense-form">
          <label for="expense-name">Наименование:</label>
          <input type="text" id="expense-name" required />
          
          <label for="expense-amount">Стоимость:</label>
          <input type="number" id="expense-amount" required min="1" />
          
          <label for="expense-category">Категория:</label>
          <select id="expense-category" required>
            <option value="Еда">Еда</option>
            <option value="Транспорт">Транспорт</option>
            <option value="Развлечения">Развлечения</option>
            <option value="Другое">Другое</option>
          </select>
          
          <button type="submit">Добавить</button>
        </form>
      </div>
    `;
  }

  setSubmitHandler(handler) {
    this._submitHandler = handler;
    this._initFormHandlers();
  }

  _initFormHandlers() {
    const form = this.getElement().querySelector('#expense-form');
    if (!form) {
      return;
    }

    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._collectFormData();
      
      if (this._validateFormData()) {
        this._submitHandler(this._formData);
        this.clearForm();
      } else {
        alert('Пожалуйста, заполните все поля корректно');
      }
    });
  }

  _collectFormData() {
    const element = this.getElement();
    this._formData = {
      name: element.querySelector('#expense-name').value,
      amount: Number(element.querySelector('#expense-amount').value),
      category: element.querySelector('#expense-category').value
    };
  }

  _validateFormData() {
    return this._formData.name && 
           this._formData.amount > 0 && 
           this._formData.category;
  }

  clearForm() {
    const element = this.getElement();
    element.querySelector('#expense-name').value = '';
    element.querySelector('#expense-amount').value = '';
    element.querySelector('#expense-category').value = 'Еда';
    this._formData = {
      name: '',
      amount: 0,
      category: 'Еда'
    };
  }
}