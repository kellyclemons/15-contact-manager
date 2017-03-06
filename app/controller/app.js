import ContactFormView from '../view/contact-form';
import ContactListView from '../view/contact-list';
import { findAll } from '../actions';

export default class AppController {
  constructor(el, store) {
    this.el = el;
    this.store = store;

    this.ContactFormView = new ContactFormView(this.el.querySelector('.contact-form'), this.store);
    this.ContactListView = new ContactListView(this.el.querySelector('.grid'), this.store);
  }

  // create a 'constructor' function that takes 2 arguments and saves it on the current app instance
  // this should include an element that contains the entire app
  // and also the redux store

  created() {
    this.store.subscribe(() => {
      window.localStorage.contacts = JSON.stringify(this.store.getState().contacts);
    });

    this.ContactFormView.mounted();
    this.ContactListView.mounted();
    // // Get the stringified list of contacts or a default of an empty array
    // Dispatch FIND_ALL to the store with the data loaded from localStorage
    this.store.dispatch({
      type: 'CONTACT@FIND_ALL',
      data: JSON.parse(window.localStorage.contacts || '[]')
    });
  }
}
