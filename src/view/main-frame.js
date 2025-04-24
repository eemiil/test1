import { AbstractComponent } from '../framework/view/abstract-component.js';

export class MainFrameComponent extends AbstractComponent {
    constructor() {
        super();
    }

    get template() {
        return `
      <div class="expense-container">
        <h1 class="expense-title">Учет расходов</h1>
        <div class="expense-form-container"></div>
        <div class="expense-filter-container"></div>
        <div class="expense-list-container">
          <h2>Список расходов</h2>
          <ul class="expense-list" id="expense-list"></ul>
        </div>
      </div>
    `;
    }

    get formContainer() {
        return this.getElement().querySelector('.expense-form-container');
    }

    get filterContainer() {
        return this.getElement().querySelector('.expense-filter-container');
    }

    get listContainer() {
        return this.getElement().querySelector('#expense-list');
    }
}