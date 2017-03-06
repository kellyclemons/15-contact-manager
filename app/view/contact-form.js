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
      this.store.dispatch({
        type: 'CONTACT@CREATE',
        data: {
          firstName: this.el.querySelector('.form__firstname').value,
          lastName: this.el.querySelector('.form__lastname').value,
          address: this.el.querySelector('.form__street').value,
          city: this.el.querySelector('.form__city').value,
          state: this.el.querySelector('.form__state').value,
        }
      });
    });
  }
}
