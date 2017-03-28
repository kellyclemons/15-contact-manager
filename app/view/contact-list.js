import { remove } from '../actions';

class ItemView {
  constructor(data, store) {
    this.data = data;
    this.store = store;

    this.el = document.createElement('div');
    this.el.classList.add('grid__item');

    this.el.innerHTML = `
    <div class="contact">
      <div class="contact-info">
        <div class="contact-info__name">Tablada, Ryan</div>
        <div class="contact-info__street">123 1st Ave S</div>
        <div class="contact-info__city-state">Nashville, TN</div>
      </div>
      <button class="contact-delete">Delete</button>
    </div>`;
  }

  mounted() {
    this.el.addEventListener('click', () => {
      this.store.dispatch(remove(this.data.id));
    });
  }

  render() {
    this.el.querySelector('.contact-info__name').innerText = `${this.data.lastName}, ${this.data.firstName}`;
    this.el.querySelector('.contact-info__street').innerText = this.data.street;
    this.el.querySelector('.contact-info__city-state').innerText = `${this.data.city}, ${this.data.state}`;
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
