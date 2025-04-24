export class AbstractComponent {
  #element = null;

  getElement() {
    if (!this.#element) {
      this.#element = this.createElement(this.template);
    }
    return this.#element;
  }

  createElement(template) {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = template.trim();
    return wrapper.firstChild;
  }

  removeElement() {
    this.#element = null;
  }
}