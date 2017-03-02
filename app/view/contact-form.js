export default class ContactFormView {
  // create a 'constructor' function that takes 2 arguments and saves it on the current app instance
  constructor(el, store) {
    this.el = el;
    this.store = store;
  }

  // create a mounted function
  mounted() {
    // Listen for submit events on the current element
    this.el.addEventListener('sumbit', (ev) => {
      // Stop the browser's default behaviour
      ev.preventDefault();

      const data = {
        firstName: this.el.querySelector('.form__firstname'),
        lastName: this.el.querySelector('.form__lastname'),
        address: this.el.querySelector('.form__street'),
        city: this.el.querySelector('.form__city'),
        state: this.el.querySelector('.form__State'),
      };

      this.store.dispatch({ type: 'CONTACT@CREATE', data });
    });
  }
}
