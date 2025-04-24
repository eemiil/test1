import ExpenseModel from "../model/expense-model.js";
import { ExpenseFormView } from "../view/expense-form.js";
import { ExpenseItemView } from "../view/expense-item.js";
import { MainFrameComponent } from "../view/main-frame.js";
import { render, RenderPosition } from "../framework/render.js";
import { AbstractComponent } from "../framework/view/abstract-component.js";

export class ExpensePresenter {
  constructor(container) {
    this._container = container;
    this._model = new ExpenseModel();
    this._mainFrame = new MainFrameComponent();
    this._formView = new ExpenseFormView();
    
    this._init();
    this._model.addObserver(() => this._updateView());
  }

  _init() {
    render(this._mainFrame, this._container);
    render(this._formView, this._mainFrame.formContainer);
    

    this._formView.setSubmitHandler((formData) => {
        this._handleFormSubmit(formData);
    });
      
    this._updateView();
  }

  _handleFormSubmit(formData) {
    this._model.addExpense(formData);
  }

  _handleDeleteExpense(id) {
    this._model.removeExpense(id);
  }

  _updateView() {
    const listContainer = this._mainFrame.listContainer;
    if (!listContainer) {
      return;
    }
    
    listContainer.innerHTML = '';
    
    this._model.exps.forEach(expense => {
      const itemView = new ExpenseItemView(expense, {
        onDelete: (id) => this._handleDeleteExpense(id)
      });
      render(itemView, listContainer);
    });
  }
}