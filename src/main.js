import { createApp } from 'vue';
import { createWebHashHistory, createRouter } from 'vue-router';
import { createPinia } from 'pinia';
import App from './App.vue';
import TodoApp from './components/TodoApp.vue';
import AboutUs from './pages/AboutUs.vue';
import './assets/main.css';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//fontawesome  ( set up the library)
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import {
  faUserSecret,
  faMagnifyingGlass,
  faPencil,
} from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
library.add(faUserSecret, faMagnifyingGlass, faPencil);

const routes = [
  { path: '/', component: TodoApp, props: { wordToSearch: '' } },
  { path: '/about-us', component: AboutUs },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

const pinia = createPinia();

createApp(App)
  .use(vuetify)
  .use(router)
  .use(pinia)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
