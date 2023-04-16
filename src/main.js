import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import components from './components/UI/index'
import router from './router/router';
import direstives from './directives/index'
import store from './store';

const app = createApp(App);

direstives.forEach(directive => {
  app.directive(directive.name, directive);
})

components.forEach((component) => app.component(component.name, component));

app
  .use(router)
  .use(store)
  .mount('#app')
