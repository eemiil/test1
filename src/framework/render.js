import { AbstractComponent } from "./view/abstract-component.js";

const RenderPosition = {
    BEFOREBEGIN: 'beforebegin',
    AFTERBEGIN: 'afterbegin',
    BEFOREEND: 'beforeend',
    AFTEREND: 'afterend',
};

function createElement(template) {
    const newElement = document.createElement('div');
    newElement.innerHTML = template;
    return newElement.firstElementChild;
}

function remove(component) {
    if (component === null) {
        return;
    }

    if (!component.getElement()) {
        return;
    }

    component.getElement().remove();
    component.removeElement();
}

function render(component, container, place = RenderPosition.BEFOREEND) {
    if (!(component instanceof AbstractComponent)) {
        throw new Error('Can render only components');
    }

    if (container === null) {
        throw new Error('Container element doesn\'t exist');
    }

    container.insertAdjacentElement(place, component.getElement());
}

export { RenderPosition, createElement, render, remove };