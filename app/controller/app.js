export default class AppController {
  constructor(el, store) {
    this.el = el;
    this.store = store;

    this.contactForm = new ContactFormView(el.querySelector('.contact-form'), store);
  }

  // create a 'constructor' function that takes 2 arguments and saves it on the current app instance
  // this should include an element that contains the entire app
  // and also the redux store

  created() {
    this.store.subscribe(() => {
      const contacts = this.store.getState().contacts;
      window.localStorage.contacts = JSON.stringify(contacts);
    });

    this.contactForm.mounted();

    // // Get the stringified list of contacts or a default of an empty array
    const dataString = window.localStorage.contacts || '[]';
    // Dispatch FIND_ALL to the store with the data loaded from localStorage
    this.store.dispatch({ type: 'CONTACT@FIND_ALL', data: JSON.parse(dataString) });
  }
}
