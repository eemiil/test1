import { ExpensePresenter } from "./src/presenter/expense-presenter.js";

const bodyContainer = document.querySelector('.app');

const presenter = new ExpensePresenter(bodyContainer);