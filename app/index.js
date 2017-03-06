import 'whatwg-fetch';
import store from './store';
import AppController from './controller/app';

// Select an element that contains the entire app
const el = document.querySelector('.app');
// Create an instance of the 'App Controller' class passing in the app element and store
const controller = new AppController(el, store);
// run 'created' on app instance
controller.created();
