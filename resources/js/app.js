import './bootstrap.js';
import {  createApp  } from 'vue';
import App from './components/App.vue'
import Olimpiada from './components/Olimpiada.vue'
import Auth from './components/Auth.vue'
import Form from './components/Form.vue'
import Schedule from './components/Schedule.vue'
import Admin from './components/Admin.vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

const app = createApp();

app.component('app', App)
app.component('olimpiada', Olimpiada)
app.component('feedback', Form)
app.component('Auth', Auth)
app.component('admin', Admin)
app.component('Schedule', Schedule)

app.mount("#app");
// document.addEventListener('click', function (e) {
//     if (e.target.id === 'B_About') {
//         $('#B_About').popover();
//     }
// }, false);
// $(document).ready(function(){
//     $('[data-toggle="popover"]').popover();
// });
