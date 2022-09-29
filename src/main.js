import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'


//bootstrap

import  'bootstrap/dist/css/bootstrap.min.css'


//fontawesome  ( set up the library)
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret,faMagnifyingGlass, faPencil } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret,faMagnifyingGlass,faPencil)



createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
