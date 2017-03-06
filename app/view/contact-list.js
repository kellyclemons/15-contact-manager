import { remove } from '../actions';

class ItemView {
  constructor(data, store) {
    this.data = data;
    this.store = store;

    this.el = document.createElement('div');
    this.el.classList.add('grid__item');

    this.el.innerHTML = `
    <div class="contact">
      <h2 class="contact__name">
        <span class="contact__last-name"></span>
        <span class="contact__first-name"></span>
      </h2>
    <p class="contact__address></p>
    <p class="contact__location">
      <span class="contact__city"></span>
      <span class="contact__state"></span>
    </p>
    <button class="delete">Delete</button>
  </div>`;
  }

  mounted() {
    this.el.addEventListener('click', () => {
      this.store.dispatch(remove(this.data.id));
    });
  }

  render() {
    this.el.querySelector('.contact-card__name').innerText = `${this.data.lastName}, ${this.data.firstName}`;
    this.el.querySelector('.contact-card__street').innerText = this.data.street;
    this.el.querySelector('.contact-card__location').innerText = `${this.data.city}, ${this.data.state}`;
  }
}

export default class ContactListView {
  constructor(el, store) {
    this.el = el;
    this.store = store;
  }

  mounted() {
    this.store.subscribe(() => {
      this.render();
    });
  }

  render() {
    this.el.innerHTML = '';
    const contacts = this.store.getState().contacts;
    contacts.forEach((data) => {
      const view = new ItemView(data, this.store);
      view.mounted();
      view.render();

      this.el.appendChild(view.el);
    });
  }
}
