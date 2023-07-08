import { createApp } from 'vue'
import './style.css'
import '../src/scss/styles.scss'
import App from './App.vue'

// Import Pinia
import { createPinia } from 'pinia';

const pinia = createPinia();

// Import Quill
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

// Material Icons
import Facebook from "vue-material-design-icons/Facebook.vue"
import Whatsapp from "vue-material-design-icons/Whatsapp.vue"
import Linkedin from "vue-material-design-icons/Linkedin.vue"
import Menu from "vue-material-design-icons/Menu.vue"


import * as bootstrap from 'bootstrap'

// Import Axios to access APIs
import axios from 'axios'
import VueAxios from 'vue-axios'

// Import Router
import router from './router/routes.js'

createApp(App)
    .use(router)
    .use(VueAxios, axios)
    .use(pinia)
    .component('QuillEditor', QuillEditor)
    .component('facebook-icon', Facebook)
    .component('whatsapp-icon', Whatsapp)
    .component('linkedin-icon', Linkedin)
    .component('menu-icon', Menu)
    .mount('#app')
