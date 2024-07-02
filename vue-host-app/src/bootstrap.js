import { createApp, defineAsyncComponent } from 'vue';
import App from './App.vue';
import ReactTestComponent from './ReactTestComponent';

const VueRemoteAppComponent = defineAsyncComponent(() => import('vueRemoteApp/VueRemoteAppComponent'));

const app = createApp(App);

// react component
app.component('react-test-component', ReactTestComponent);

// vue component
app.component('vue-remote-app-component', VueRemoteAppComponent);

app.mount('#app');
