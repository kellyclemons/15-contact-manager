import { create } from '../actions';

export default class ContactFormView {
  // create a 'constructor' function that takes 2 arguments and saves it on the current app instance
  constructor(el, store) {
    this.el = el;
    this.store = store;
  }

  // create a mounted function
  mounted() {
    // Listen for submit events on the current element
    this.el.addEventListener('submit', (ev) => {
      // Stop the browser's default behaviour
      ev.preventDefault();

      const data = {
        firstName: this.el.querySelector('.form__firstname + input').value,
        lastName: this.el.querySelector('.form__lastname + input').value,
        street: this.el.querySelector('.form__street + input').value,
        city: this.el.querySelector('.form__city + input').value,
        state: this.el.querySelector('.form__state + input').value,
      };

      this.store.dispatch(create(data));
    });
  }
}
