import 'muse-ui/dist/muse-ui.css';
import Vue from 'vue';
import MuseUI from 'muse-ui';
import MuseUIMessage from '../src';
import App from './App';
Vue.use(MuseUI);
Vue.use(MuseUIMessage, {
  okLabel: 'OK',
  cancelLabel: 'Cancel'
});

const app = new Vue({
  ...App
});

window.Message = MuseUIMessage;

app.$mount('#app');
